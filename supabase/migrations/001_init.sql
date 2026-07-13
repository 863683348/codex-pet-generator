-- Codex Pet Generator — Initial Migration
-- Run this in Supabase SQL Editor

-- Create pets table
CREATE TABLE IF NOT EXISTS pets (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pet_id      TEXT,
  status      TEXT NOT NULL DEFAULT 'pending',
  style       TEXT NOT NULL DEFAULT 'pixel',
  email       TEXT,

  -- Source image
  source_image_path  TEXT,
  source_image_url   TEXT,

  -- Base image
  base_image_path    TEXT,
  base_image_url     TEXT,
  base_approved      BOOLEAN DEFAULT FALSE,

  -- Animation output
  spritesheet_path   TEXT,
  spritesheet_url    TEXT,
  pet_json           JSONB,
  zip_path           TEXT,
  zip_url            TEXT,

  -- Metadata
  display_name       TEXT,
  description        TEXT,

  -- Timestamps
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,

  -- Error tracking
  error        TEXT,
  retry_count  INT DEFAULT 0
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pets_status ON pets(status);
CREATE INDEX IF NOT EXISTS idx_pets_email ON pets(email);
CREATE INDEX IF NOT EXISTS idx_pets_created ON pets(created_at DESC);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER pets_updated_at
  BEFORE UPDATE ON pets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Create storage bucket (run separately if needed)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('pet-assets', 'pet-assets', true);
