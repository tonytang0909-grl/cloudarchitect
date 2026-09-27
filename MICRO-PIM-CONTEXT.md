# Micro PIM — portfolio context

## Existing product, described by Tony

Source: the B2B integration chat `01a0dac4-947a-7930-844e-ff0577002154`.

- Product enrichment app built using Gadget.dev for BigCommerce.
- Configurable supplier/source fetching.
- A local copy of BigCommerce products maintained through webhooks.
- Full sync and delta sync, with dashboard functionality.
- Three-way comparison after sync: current BigCommerce data, the last persisted snapshot from the most recent sync, and incoming vendor data.
- Merchants also edit BigCommerce directly, so the application is not the sole source of truth.
- Users can review differences, choose overrides, enrich products, and push chosen changes.
- Generalizing the product and seeking a BigCommerce marketplace listing were aspirations, not confirmed completed releases.

## Related proposed scope

`/Users/zhuang/Documents/ChatGPT/B2B integration/pilot-design-spec.md` explicitly labels itself proposed implementation scope, not verified existing Gadget capabilities.

It proposes a CSV-first workflow, saved mappings, matching existing products, explicit approval, separate supplier/destination baselines, remembered decisions, stale-approval checks, and partial-failure recovery. Those are not represented as shipped portfolio capabilities.

## Portfolio demonstration

The new preview uses fictional product values to illustrate three cases: a store-only title edit, a supplier-only material change, and conflicting description changes. Visitors choose a description, inspect a merged preview, and apply it to the demo only. No store, supplier, or API is connected.
