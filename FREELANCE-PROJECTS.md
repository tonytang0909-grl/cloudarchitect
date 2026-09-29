# Freelance application project entries

These projects were developed concurrently across the past year. Keep their actual overlapping dates. Exact months and official job title still need confirmation. No verified public project links were supplied. Descriptions below distinguish implemented work from future architecture and omit confidential operational details.

## Kazilo (formerly Orkest)

**Project or company name:** Kazilo — Visual Workflow Automation Platform

**Project link:** Not supplied; add an approved public product or portfolio URL.

**Start date:** To confirm (built within the past year)

**End date:** To confirm; use Present only if still actively contributing

**Your official role:** To confirm. Functional scope: full-stack development and cloud architecture.

**Project overview:** I developed the original visual workflow authoring experience and contributed to the evolution of a multi-tenant commerce automation platform. The product enabled merchants to connect commerce systems, define conditions and data mappings, and execute compiled workflows in their own AWS accounts. My work covered the workflow editor, execution inspection, connector integrations and cloud execution architecture.

**Project domain & product type:** E-commerce automation; multi-tenant SaaS and visual workflow platform.

**Accomplishments and responsibilities:**
- Built visual triggers, conditions, data mappings and action configuration, including translation between rule-builder structures and JSON Logic.
- Implemented execution inspection with live state highlighting, captured inputs and outputs, and pause/resume checkpoints.
- Built commerce connectors and per-instance authentication, and developed Go tooling for connector development.
- Contributed to an AWS execution architecture with specialised node handlers and S3-backed run context.
- Implemented scope-aware Inline Map groundwork and designed a subsequent bulk-processing architecture using Distributed Map.

**Technologies you used in this project:** TypeScript, React, ReactFlow, Gadget, AWS Step Functions, AWS Lambda, Amazon S3, AWS CDK, IAM/STS, Go, JSON Logic, OAuth, BigCommerce, Adobe Commerce/App Builder, Akeneo, Next.js.

**Upload images (optional):** Synthetic workflow canvas, tenant execution diagram, connector configuration or execution inspector mockup.

## lamb

**Project or company name:** lamb — Step Functions Record & Replay Debugger

**Project link:** Not supplied; public v0.1 release pending.

**Start date:** To confirm (built within the past year)

**End date:** To confirm; use Present only if still actively contributing

**Your official role:** To confirm. Functional scope: developer tooling and CLI development.

**Project overview:** I built a Go CLI prototype that captured real AWS Step Functions executions and replayed selected Lambda states locally under a Node.js debugger. It helped serverless developers investigate failures using captured state inputs without changing the deployed workflow. The tool supported execution discovery, watch mode, Map child capture and local handler configuration.

**Project domain & product type:** Developer tools; serverless debugging CLI.

**Accomplishments and responsibilities:**
- Delivered an end-to-end prototype for execution capture, state replay and debugger attachment.
- Implemented read-only watch mode and capture of child executions created by Map states.
- Added configurable handler mappings, AWS profiles and regions, environment settings and capture retention.
- Resolved TypeScript runtime, monorepo module resolution and debugger-startup issues across local development setups.
- Identified the limitations of raw-output chaining and designed transform-aware replay improvements for a future release.

**Technologies you used in this project:** Go, Cobra, AWS SDK for Go v2, AWS Step Functions, AWS Lambda, CloudFormation, Node.js, TypeScript, tsx, YAML, Node Inspector, VS Code, WebStorm.

**Upload images (optional):** Synthetic CLI capture session, selected-state replay timeline and debugger breakpoint view.

## NexusMF

**Project or company name:** NexusMF — Product Enrichment & Supplier Review App

**Project link:** Private BigCommerce app; no public link supplied.

**Start date:** To confirm (built within the past year)

**End date:** To confirm; production delivery completed, ongoing support dates unconfirmed

**Your official role:** To confirm. Functional scope: full-stack and commerce integration development.

**Project overview:** I built a product enrichment application that helped merchandising staff review supplier updates across approximately 21,000 products. The app synchronised vendor content, compared incoming values with the approved vendor baseline and live store data, and let staff approve, edit, reject or ignore changes before publication. It distinguished genuine supplier changes from store edits so merchant enrichment did not repeatedly reopen review.

**Project domain & product type:** E-commerce; product information management and catalogue enrichment.

**Accomplishments and responsibilities:**
- Delivered the application into production following UAT.
- Built scheduled full and incremental supplier synchronisation using a cancellable fetch, ingest and finalisation pipeline.
- Implemented three-way review semantics that kept the approved vendor snapshot separate from merchant-edited published content.
- Built searchable, filterable, server-sorted review screens and approval flows for product content, images, manuals and metafields.
- Consolidated bulk and single-product mapping and implemented webhook updates that refreshed store information without changing review status.

**Technologies you used in this project:** TypeScript, React, Gadget, BigCommerce APIs, BigDesign, webhooks, scheduled jobs, REST APIs, HTML parsing, metafields.

**Upload images (optional):** Synthetic product review table, three-way comparison and approval workflow. Use fictional SKUs and product content.

## FlexVal

**Project or company name:** FlexVal — Visual Order & Freight Validation Engine

**Project link:** Private client deployment; no public link supplied.

**Start date:** To confirm (built within the past year)

**End date:** To confirm; handover in progress according to the supplied spec

**Your official role:** To confirm. Functional scope: full-stack development and AWS architecture.

**Project overview:** I built an AWS-native visual validation engine for orders and freight invoices. Users designed validation flows with a drag-and-drop editor, grouped actions into repeating scopes, and compiled document-specific workflows into AWS Step Functions. The platform combined federated user access, client permissions, reusable execution handlers and storage for large document payloads.

**Project domain & product type:** B2B integration and logistics; visual workflow compiler and validation platform.

**Accomplishments and responsibilities:**
- Built the visual editor and compiler, translating loop membership into Map execution and supporting reusable subflows.
- Implemented Distributed Map execution with Express children and S3-backed inputs to address large-document payload constraints.
- Built per-document-type state machines around a shared client executor, allowing workflow publication without creating new Lambda functions.
- Implemented Cognito-based access with Azure AD federation, client permissions and Aurora Serverless PostgreSQL persistence.
- Provisioned AWS infrastructure and client environments, and designed a future shared control plane for cross-account publication; that later phase was deferred at handover.

**Technologies you used in this project:** TypeScript, React, Next.js, ReactFlow, shadcn/ui, Radix UI, AWS CDK, Step Functions, Lambda, EventBridge, DynamoDB, S3, Cognito, Azure AD, Aurora Serverless v2 PostgreSQL, RDS Data API, Drizzle ORM, Secrets Manager, IAM, Amplify, Bitbucket Pipelines.

**Upload images (optional):** Synthetic drag-and-drop canvas, Map compilation comparison and deployment architecture diagram with planned features labelled.

## Centralised Notification Service

**Project or company name:** Centralised Integration Notification Service

**Project link:** Private internal service; no public link supplied.

**Start date:** To confirm (built within the past year)

**End date:** To confirm; use Present only if still actively contributing

**Your official role:** To confirm. Functional scope: serverless backend and integration observability development.

**Project overview:** I built a centralised notification and execution-monitoring service for more than ten integration processes across two client environments. The service collected structured events, maintained job lifecycle state and applied configurable email notification rules. An embedded dashboard let operational users inspect execution logs and manage notification settings.

**Project domain & product type:** Integration operations; event-driven monitoring and notification platform.

**Accomplishments and responsibilities:**
- Built an SNS/SQS ingestion pipeline, publisher SDK and DynamoDB-backed execution tracking.
- Standardised correlation around process identifiers and execution names so independent publishers contributed to the same job record.
- Handled completion-before-log and delayed-message scenarios without reopening completed executions.
- Added Step Functions completion tracking and a scheduled sweeper to identify silent jobs as stale failures.
- Implemented configurable immediate, interval and job-end email notification rules and a dashboard for logs and rule management.

**Technologies you used in this project:** TypeScript, Node.js, AWS CDK, SNS, SQS, Lambda, DynamoDB, S3, EventBridge, Step Functions, CloudWatch, Gadget, BigCommerce, Nx, Yarn.

**Upload images (optional):** Synthetic execution dashboard, out-of-order event timeline and notification rule editor.
