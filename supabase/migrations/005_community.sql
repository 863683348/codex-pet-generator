-- Codex Pet Generator — Community Enhancement Migration
-- Run this in Supabase SQL Editor (after 001_init.sql, 002_usage.sql, 003_paypal.sql, 004_share_points.sql)

ALTER TABLE pets ADD COLUMN IF NOT EXISTS featured BOOLEAN NOT NULL DEFAULT FALSE;
CREATE INDEX IF NOT EXISTS idx_pets_featured ON pets (created_at DESC) WHERE featured = TRUE;
ALTER TABLE user_usage ADD COLUMN IF NOT EXISTS display_name TEXT;
CREATE INDEX IF NOT EXISTS idx_user_usage_points ON user_usage (points DESC);
CREATE TABLE IF NOT EXISTS pet_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS pet_tag_map (
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES pet_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (pet_id, tag_id)
);
CREATE INDEX IF NOT EXISTS idx_pet_tag_map_tag_id ON pet_tag_map (tag_id);
CREATE INDEX IF NOT EXISTS idx_pet_tag_map_pet_id ON pet_tag_map (pet_id);
CREATE TABLE IF NOT EXISTS submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pet_id UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions (status);
CREATE INDEX IF NOT EXISTS idx_submissions_pet_id ON submissions (pet_id);
CREATE INDEX IF NOT EXISTS idx_submissions_user_id ON submissions (user_id);
INSERT INTO pet_tags (slug, name) VALUES
  ('cat','Cats'),('dog','Dogs'),('fantasy','Fantasy'),('robot','Robots'),
  ('anime','Anime'),('game','Game Characters'),('celebrity','Celebrities'),('original','Original')
ON CONFLICT (slug) DO NOTHING;
ALTER TABLE pets ENABLE ROW LEVEL SECURITY;
ALTER TABLE pet_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE pet_tag_map ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public read public pets" ON pets;
CREATE POLICY "public read public pets" ON pets FOR SELECT USING (is_public = TRUE);
DROP POLICY IF EXISTS "public read tags" ON pet_tags;
CREATE POLICY "public read tags" ON pet_tags FOR SELECT USING (TRUE);
DROP POLICY IF EXISTS "public read tag map" ON pet_tag_map;
CREATE POLICY "public read tag map" ON pet_tag_map FOR SELECT USING (TRUE);
DROP POLICY IF EXISTS "users insert own submissions" ON submissions;
CREATE POLICY "users insert own submissions" ON submissions FOR INSERT WITH CHECK (user_id = auth.uid()::TEXT);
DROP POLICY IF EXISTS "users read own submissions" ON submissions;
CREATE POLICY "users read own submissions" ON submissions FOR SELECT USING (user_id = auth.uid()::TEXT);
