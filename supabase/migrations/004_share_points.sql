-- Codex Pet Generator — Share + Points Migration
-- Run this in Supabase SQL Editor (after 001_init.sql, 002_usage.sql, 003_paypal.sql)

-- pets: ownership linkage + public flag + share counter
ALTER TABLE pets ADD COLUMN IF NOT EXISTS user_id TEXT;
ALTER TABLE pets ADD COLUMN IF NOT EXISTS is_public BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE pets ADD COLUMN IF NOT EXISTS share_count INT NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_pets_user_id ON pets(user_id);
CREATE INDEX IF NOT EXISTS idx_pets_is_public ON pets(is_public);

-- user_usage: earned points balance + bonus generations (redeemed from points)
ALTER TABLE user_usage ADD COLUMN IF NOT EXISTS points INT NOT NULL DEFAULT 0;
ALTER TABLE user_usage ADD COLUMN IF NOT EXISTS bonus_generations INT NOT NULL DEFAULT 0;

-- pet_shares: idempotent share ledger. UNIQUE(pet_id, user_id) guarantees a
-- user can only ever earn points once per pet, preventing share-farming.
CREATE TABLE IF NOT EXISTS pet_shares (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pet_id          UUID NOT NULL REFERENCES pets(id) ON DELETE CASCADE,
  user_id         TEXT NOT NULL,
  platform        TEXT NOT NULL DEFAULT 'web',
  points_awarded  INT NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (pet_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_pet_shares_user_id ON pet_shares(user_id);
CREATE INDEX IF NOT EXISTS idx_pet_shares_pet_id ON pet_shares(pet_id);
