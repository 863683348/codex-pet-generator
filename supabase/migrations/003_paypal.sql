-- Codex Pet Generator — PayPal Migration
-- Run this in Supabase SQL Editor (after 001_init.sql and 002_usage.sql)

-- PayPal order audit log (idempotency + reconciliation)
CREATE TABLE IF NOT EXISTS paypal_orders (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id    TEXT NOT NULL UNIQUE,
  user_id     TEXT NOT NULL,
  email       TEXT,
  plan        TEXT,
  status      TEXT,
  captured_at TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_paypal_orders_order_id ON paypal_orders(order_id);
CREATE INDEX IF NOT EXISTS idx_paypal_orders_user_id ON paypal_orders(user_id);

-- Monthly quota expiration for one-time purchases
ALTER TABLE user_usage ADD COLUMN IF NOT EXISTS plan_expires_at TIMESTAMPTZ;

CREATE OR REPLACE FUNCTION update_paypal_orders_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER paypal_orders_updated_at
  BEFORE UPDATE ON paypal_orders
  FOR EACH ROW
  EXECUTE FUNCTION update_paypal_orders_updated_at();
