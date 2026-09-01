/* ============================================================
   Skill Ladder — typed vanilla JS (JSDoc types; browsers cannot
   execute raw .ts, so logic is written and shaped like TypeScript
   — explicit types via JSDoc, no `any`, narrow function contracts —
   then compiled down by hand to plain ES2022 for direct execution.)
   ============================================================ */

/**
 * @typedef {{id:string, category:string, title:string, desc:string}} Skill
 * @typedef {{id:string, label:string, years:string, calibration:string, must:Skill[], nice:Skill[]}} Level
 * @typedef {{id:string, name:string, role:string, abbr:string, accent:string, levels:Level[]}} Track
 */

/** @type {Track[]} */
const SEED_TRACKS = [
  {
    id: "flutter",
    name: "Flutter",
    role: "Mobile Developer",
    abbr: "FL",
    accent: "#45D2E8",
    levels: [
      {
        id: "junior",
        label: "Junior",
        years: "0–2 years",
        calibration:
          "Hired for coachable fundamentals and the ability to ship a feature inside an existing codebase under supervision — not for architectural judgment. Expect 3–6 months onboarding into house conventions. AI tools are assumed; explaining *why* generated code works is now the actual bar.",
        must: [
          {
            category: "Language & framework",
            title: "Dart fundamentals & widgets",
            desc: "Solid Dart fundamentals (null safety, async/await, Futures/Streams basics); can build and compose stateless/stateful widgets; understands the widget tree and basic rebuild behavior.",
          },
          {
            category: "State management",
            title: "setState & guided Provider/Riverpod",
            desc: "Can use setState and at least one app-level solution (Provider or Riverpod) in a guided/existing pattern — not expected to design the state architecture.",
          },
          {
            category: "Architecture",
            title: "Follows existing structure",
            desc: "Can follow an existing folder/layer structure (e.g., feature-first or MVVM-lite); understands separation of UI from business logic conceptually.",
          },
          {
            category: "API / networking",
            title: "REST calls & JSON parsing",
            desc: "Can call REST APIs with http or dio, parse JSON into models (manually or via json_serializable), handle basic loading/error/success UI states.",
          },
          {
            category: "Database / persistence",
            title: "Basic local storage",
            desc: "Basic local storage (shared_preferences, sqflite, or Hive) for simple caching needs.",
          },
          {
            category: "Testing",
            title: "Guided widget & unit tests",
            desc: "Can write basic widget tests and simple unit tests when shown a pattern to follow.",
          },
          {
            category: "Tooling",
            title: "IDE & Flutter CLI fluency",
            desc: "Comfortable with Android Studio/VS Code, Flutter CLI (flutter run, flutter pub get, flutter doctor), hot reload workflow.",
          },
          {
            category: "Version control",
            title: "Git basics",
            desc: "Branching, commits, pull requests, resolving simple merge conflicts.",
          },
          {
            category: "Soft skills",
            title: "Communication & receptiveness",
            desc: "Attends standups, communicates blockers early, takes and applies code review feedback without defensiveness.",
          },
        ],
        nice: [
          {
            title: "Riverpod code-gen or Cubit beyond copy-paste",
            desc: "Exposure to Riverpod's code-generation (@riverpod) or Cubit (simplified BLoC) beyond copy-pasted patterns.",
          },
          {
            title: "Figma literacy",
            desc: "Basic Figma literacy for translating designs to widgets pixel-for-pixel.",
          },
          {
            title: "Published portfolio app",
            desc: "A personal or portfolio app published to TestFlight/Play internal testing track.",
          },
          {
            title: "Lint tooling awareness",
            desc: "Familiarity with flutter_lints / very_good_analysis and why lint rules exist.",
          },
          {
            title: "Platform-channel awareness",
            desc: "Basic understanding that native code exists behind platform channels, even if never written any.",
          },
          {
            title: "Articulate AI tool usage",
            desc: "Demonstrated, articulate use of AI coding tools — can explain what a generated snippet does and why, not just that it compiles.",
          },
        ],
      },
      {
        id: "mid",
        label: "Mid-Level",
        years: "2–5 years",
        calibration:
          "The bar is independent ownership of a feature module end-to-end — from API contract discussion through shipped, tested code — plus the judgment to choose the right pattern from a known set of options without being told which one.",
        must: [
          {
            category: "Language & framework",
            title: "Dart 3 fluency & custom widgets",
            desc: "Deep Dart 3 fluency: sealed classes, pattern matching, records; understands const constructors and rebuild optimization; comfortable with custom widgets, CustomPainter basics, animation controllers.",
          },
          {
            category: "State management",
            title: "Production Riverpod or BLoC/Cubit",
            desc: "Production experience with Riverpod (providers, AsyncNotifier, ref.select for granular rebuilds) or BLoC/Cubit (events, states, BlocSelector); can justify the choice for a feature\u2019s complexity.",
          },
          {
            category: "Architecture",
            title: "Independent Clean Architecture & DI",
            desc: "Implements Clean Architecture or a layered (data/domain/presentation) structure independently; applies dependency injection (get_it, Riverpod DI).",
          },
          {
            category: "API / networking",
            title: "Auth flows, WebSockets, offline-first",
            desc: "Handles auth flows (token refresh, interceptors), pagination, WebSockets for real-time features, retry/backoff logic, offline-first patterns.",
          },
          {
            category: "Database / persistence",
            title: "Structured persistence & sync",
            desc: "Structured local persistence (Drift/Isar/Hive) with migrations; designs simple caching/sync strategies between local and remote data.",
          },
          {
            category: "Testing",
            title: "Mocked widget & unit tests",
            desc: "Writes meaningful widget tests with mocked dependencies (mocktail/mockito), unit tests for business logic, contributes to integration_test suites.",
          },
          {
            category: "Tooling & CI/CD",
            title: "CI pipelines & Fastlane",
            desc: "Configures and troubleshoots CI pipelines (Codemagic, GitHub Actions, Bitrise); manages Fastlane lanes for build automation.",
          },
          {
            category: "DevOps / deployment",
            title: "Independent signing & releases",
            desc: "Handles app signing, flavors/environments (dev/staging/prod), and TestFlight/Play internal-track releases independently.",
          },
          {
            category: "Performance",
            title: "Jank diagnosis with DevTools",
            desc: "Diagnoses jank using DevTools (frame rendering, widget rebuild counts); applies const, RepaintBoundary, and list virtualization correctly.",
          },
          {
            category: "Soft skills",
            title: "Reviews, estimates, flags risk",
            desc: "Participates meaningfully in code review as author and reviewer; estimates feature work with reasonable accuracy; raises technical risks proactively.",
          },
        ],
        nice: [
          {
            title: "Native plugin authored",
            desc: "Written a platform channel or plugin to bridge native iOS/Android functionality.",
          },
          {
            title: "Flutter web/desktop experience",
            desc: "Experience with Flutter web or desktop targets.",
          },
          {
            title: "Feature flagging / remote config",
            desc: "Familiarity with feature flagging or remote config (Firebase Remote Config, LaunchDarkly).",
          },
          {
            title: "Crash/analytics driving fixes",
            desc: "Exposure to crash/analytics tooling (Sentry, Firebase Crashlytics) and using it to drive fixes, not just install it.",
          },
          {
            title: "Design-system contributions",
            desc: "Contributed to or maintained a design-system/component library shared across features.",
          },
          {
            title: "State-management trade-off fluency",
            desc: "Comfortable evaluating Riverpod vs. BLoC vs. Signals trade-offs for a new feature rather than defaulting to whatever the team already uses.",
          },
        ],
      },
      {
        id: "senior",
        label: "Senior",
        years: "5+ years",
        calibration:
          "Signaled by system-level judgment — architecting an app (not just a feature), making build-vs-buy calls on native integrations, mentoring others, and owning production reliability. The real dividing line recruiters test for: \u201cships a polished single-codebase app\u201d vs. \u201ccan also write native Swift/Kotlin platform channels.\u201d",
        must: [
          {
            category: "Language & framework",
            title: "Expert Dart/Flutter internals",
            desc: "Can read and reason about Flutter engine/rendering-pipeline behavior when diagnosing hard performance bugs.",
          },
          {
            category: "State management",
            title: "Org-wide state strategy",
            desc: "Sets the state-management strategy for the whole app/team; can articulate migration paths (e.g., Provider \u2192 Riverpod) and lead them.",
          },
          {
            category: "Architecture",
            title: "App-wide architecture ownership",
            desc: "Owns app-wide architecture decisions (modularization, monorepo structure via Melos, package boundaries); designs for testability and multi-team collaboration.",
          },
          {
            category: "Native integration",
            title: "Native platform-channel expertise",
            desc: "Comfortable writing/reviewing platform channels, MethodChannel/EventChannel code, and native Swift/Kotlin for camera, BLE, background audio, and similar OS-level integrations.",
          },
          {
            category: "Database / persistence",
            title: "Offline-first sync architecture",
            desc: "Designs offline-first sync architectures, conflict resolution strategies, and data-layer abstractions reused across features.",
          },
          {
            category: "Testing",
            title: "Owns testing strategy & CI gates",
            desc: "Owns the testing strategy (unit/widget/integration/golden tests) and CI gating policy for the whole app; drives testing discipline across the team.",
          },
          {
            category: "Tooling & CI/CD",
            title: "Full CI/CD pipeline design",
            desc: "Designs and maintains the full CI/CD pipeline (build matrices, code signing at scale, staged rollouts, OTA-style patching where used).",
          },
          {
            category: "DevOps / deployment",
            title: "Release management ownership",
            desc: "Owns release management: versioning strategy, phased rollouts, rollback plans, App Store/Play Store compliance and review-rejection troubleshooting.",
          },
          {
            category: "Performance & security",
            title: "Performance audits & secure storage",
            desc: "Leads performance audits (startup time, frame budget, memory leaks); ensures secure storage of secrets/tokens, certificate pinning, and compliance needs.",
          },
          {
            category: "Leadership & scope",
            title: "Mentoring & cross-functional ownership",
            desc: "Mentors mid/junior developers; leads architecture reviews and RFCs; interfaces with product/design/backend leadership; owns incident response.",
          },
        ],
        nice: [
          {
            title: "External community credibility",
            desc: "Public speaking or writing (conference talks, technical blog posts) establishing credibility in the Flutter community.",
          },
          {
            title: "Multi-million-user scale experience",
            desc: "Experience shipping Flutter apps at genuine multi-million-user scale.",
          },
          {
            title: "Open-source contributions",
            desc: "Contributions to Flutter, Riverpod, BLoC, or other widely used open-source packages.",
          },
          {
            title: "Cross-platform strategy calls",
            desc: "Experience evaluating Flutter vs. React Native vs. native for a new product.",
          },
          {
            title: "Code-push / OTA tooling",
            desc: "Experience with Shorebird or similar code-push/OTA-update tooling for Flutter.",
          },
          {
            title: "On-device ML",
            desc: "Familiarity with on-device ML (tflite, ML Kit) for feature differentiation.",
          },
        ],
      },
    ],
  },
  {
    id: "angular",
    name: "Angular",
    role: "Frontend Engineer",
    abbr: "NG",
    accent: "#FF5D5D",
    levels: [
      {
        id: "junior",
        label: "Junior",
        years: "0–2 years",
        calibration:
          "Expected to ship inside an existing module under a tenured engineer\u2019s guidance, not make framework-version or architecture calls. Even junior candidates are now expected to have touched modern Angular (v17+) — Signals, standalone components, new control-flow syntax — not the older NgModule-heavy patterns.",
        must: [
          {
            category: "Language & framework",
            title: "TS fundamentals & modern Angular",
            desc: "TypeScript fundamentals (types, interfaces, generics basics); Angular 17+ basics: components, templates, directives, pipes; new control-flow syntax (@if, @for, @switch).",
          },
          {
            category: "State management",
            title: "Local signals & consuming NgRx",
            desc: "Local component state via Signals for simple cases; can consume data from an existing NgRx store or service without designing it.",
          },
          {
            category: "Architecture",
            title: "Follows module conventions",
            desc: "Follows established module/feature-folder conventions; understands components vs. services separation.",
          },
          {
            category: "API / networking",
            title: "HttpClient & basic RxJS",
            desc: 'Uses HttpClient to call REST APIs; basic RxJS operators (map, switchMap, catchError) at a "can follow a pattern" level.',
          },
          {
            category: "Forms",
            title: "Reactive Forms with validators",
            desc: "Builds forms with Reactive Forms including basic validators.",
          },
          {
            category: "Testing",
            title: "Guided unit tests",
            desc: "Writes guided unit tests with Jasmine/Karma or Jest on a scoped task.",
          },
          {
            category: "Tooling",
            title: "Angular CLI & component library",
            desc: "Angular CLI fluency (ng generate, ng build, ng serve); Angular Material or a house component library.",
          },
          {
            category: "Version control",
            title: "Git basics",
            desc: "Git basics, PR etiquette, following team branching conventions.",
          },
          {
            category: "Soft skills",
            title: "Clear communication",
            desc: "Communicates progress clearly; asks for help with the right context; incorporates review feedback.",
          },
        ],
        nice: [
          {
            title: "Signals beyond copy-paste",
            desc: "Exposure to Signals-based state beyond copy-pasted examples (signal(), computed(), effect()).",
          },
          {
            title: "Accessibility basics",
            desc: "Basic accessibility (a11y) awareness — semantic HTML, ARIA basics.",
          },
          {
            title: "SCSS/Tailwind styling",
            desc: "Familiarity with SCSS/Tailwind for styling beyond component-scoped CSS.",
          },
          {
            title: "Deployed personal project",
            desc: "A personal project deployed and publicly viewable as a portfolio signal.",
          },
          {
            title: "AI pair-programming fluency",
            desc: "Comfortable using AI pair-programming tools (Copilot/Cursor) while still able to explain generated code.",
          },
        ],
      },
      {
        id: "mid",
        label: "Mid-Level",
        years: "2–5 years",
        calibration:
          "Mid-level engineers own a feature module end-to-end and are expected to lead Signals/standalone-component migrations on their own screens — a concrete, current marker separating them from juniors who only consume existing patterns.",
        must: [
          {
            category: "Language & framework",
            title: "Strong TS & deliberate OnPush",
            desc: "Strong TypeScript (strict mode, discriminated unions, utility types); deep component/lifecycle knowledge; OnPush applied deliberately, not by default.",
          },
          {
            category: "State management",
            title: "Signals vs. NgRx judgment",
            desc: "Chooses between Signals-based local/service state and NgRx (actions/reducers/effects) based on complexity — recognizes when full NgRx is over-engineering.",
          },
          {
            category: "Architecture",
            title: "Owns feature module & migrations",
            desc: "Owns a feature module independently; migrates modules to standalone components; structures shared services and DI providers cleanly.",
          },
          {
            category: "API / networking",
            title: "Advanced RxJS & real-time data",
            desc: "Advanced RxJS (combining streams, cancellation, error-recovery patterns); handles real-time data via WebSockets/SSE; designs typed API client layers.",
          },
          {
            category: "Testing",
            title: "Unit tests & E2E contributions",
            desc: "Writes meaningful unit tests (Jest/Jasmine) and contributes to E2E suites (Cypress or Playwright); understands the SPA testing pyramid.",
          },
          {
            category: "Tooling & CI/CD",
            title: "Build pipelines & static analysis",
            desc: "Configures build pipelines (lazy loading, route-level code splitting); works with Jenkins/GitHub Actions and static analysis (Sonar).",
          },
          {
            category: "Performance",
            title: "Change-detection performance fixes",
            desc: "Diagnoses and fixes change-detection-related performance issues using Angular DevTools; implements lazy loading to hit measurable load-time targets.",
          },
          {
            category: "DevOps / deployment",
            title: "Hosting/CDN & SSR basics",
            desc: "Understands hosting/CDN deployment (Netlify, Vercel, S3+CloudFront), environment configs, and basic SSR/hydration concepts.",
          },
          {
            category: "Soft skills",
            title: "Substantive review & estimation",
            desc: "Reviews others\u2019 PRs substantively; estimates and scopes work reliably; collaborates directly with backend engineers on API/schema design.",
          },
        ],
        nice: [
          {
            title: "Led a version/standalone migration",
            desc: "Led or substantially contributed to a version migration (e.g., v15\u2192v17+) or NgModule-to-standalone migration.",
          },
          {
            title: "Monorepo tooling",
            desc: "Familiarity with Nx or other monorepo tooling and module-boundary enforcement (e.g., Sheriff).",
          },
          {
            title: "Visual regression testing",
            desc: "Visual regression testing experience with Playwright screenshot comparisons.",
          },
          {
            title: "AI-product interface experience",
            desc: "Experience building interfaces for AI-driven products: streaming responses via SSE/WebSockets, human-in-the-loop UI patterns.",
          },
          {
            title: "Basic SSR ownership",
            desc: "Basic SSR ownership (Angular Universal / hybrid rendering) rather than just conceptual awareness.",
          },
        ],
      },
      {
        id: "senior",
        label: "Senior",
        years: "5+ years",
        calibration:
          "Shows up as judgment under nuance, not just fluency — knowing why not to use NgRx everywhere, why composition beats inheritance for shared behavior, and when a signal in a root-provided service is enough versus when signalStore() is actually justified.",
        must: [
          {
            category: "Language & framework",
            title: "Expert TS & change-detection debugging",
            desc: 'Expert TypeScript and Angular internals; can debug change-detection issues that "shouldn\'t happen" and explain root cause.',
          },
          {
            category: "State management",
            title: "Org-wide state standards",
            desc: "Sets org-wide state-management standards; flags reflexive NgRx use as a red flag; designs signalStore()-based state for genuinely complex derived/async state.",
          },
          {
            category: "Architecture",
            title: "Cross-team architecture & composition",
            desc: "Owns application-wide, often cross-team frontend architecture; favors composition over inheritance for shared behavior; designs module boundaries at scale.",
          },
          {
            category: "API / networking",
            title: "Real-time AI-product integration layer",
            desc: "Architects the frontend integration layer for complex real-time systems: streaming, chain-of-thought/agent UIs, human-in-the-loop controls.",
          },
          {
            category: "Testing",
            title: "Owns org testing strategy",
            desc: "Owns the org\u2019s testing strategy and standards across unit/component/E2E layers; drives Playwright/Cypress best practices.",
          },
          {
            category: "Tooling & CI/CD",
            title: "CI/CD & QA automation ownership",
            desc: "Owns CI/CD architecture (Jenkins/GitHub Actions, Sonar quality gates); leads QA automation strategy and release management.",
          },
          {
            category: "Performance & security",
            title: "Performance initiatives & SPA auth",
            desc: "Leads performance initiatives with measurable business outcomes (page-load, Core Web Vitals); secures token/auth handling in SPA context.",
          },
          {
            category: "DevOps / deployment",
            title: "Hosting/SSR decisions & monitoring",
            desc: "Makes hosting/CDN/SSR architecture decisions; owns production monitoring integration (Datadog, Splunk) and incident troubleshooting.",
          },
          {
            category: "Leadership & scope",
            title: "Formal mentoring & standards influence",
            desc: "Mentors mid/junior engineers explicitly; leads architecture reviews; collaborates on API/schema design; influences frontend standards org-wide.",
          },
        ],
        nice: [
          {
            title: "Led a measurable migration",
            desc: "Track record leading a framework-version or architecture migration with measurable before/after metrics (build time, defect rate, load time).",
          },
          {
            title: "AI/agentic interface architecture",
            desc: "Experience architecting frontends for AI/agentic product interfaces: observability dashboards, HITL controls, chain-of-thought visualization.",
          },
          {
            title: "Deep monorepo/micro-frontend expertise",
            desc: "Deep expertise in Nx, module federation, or micro-frontends for multi-team codebases.",
          },
          {
            title: "External thought leadership",
            desc: "Conference talks, internal tech-radar authorship, or open-source Angular ecosystem contributions.",
          },
          {
            title: "AI tooling integration fluency",
            desc: "Fluency evaluating and integrating AI-assisted development tooling into team workflows.",
          },
        ],
      },
    ],
  },
  {
    id: "spring",
    name: "Java / Spring Boot",
    role: "Backend Engineer",
    abbr: "JV",
    accent: "#6FCF6F",
    levels: [
      {
        id: "junior",
        label: "Junior",
        years: "0–2 years",
        calibration:
          "Expected to have solid CS/Java fundamentals and be able to build and modify features within an existing Spring Boot service. Production operational judgment — scaling, resilience, observability — is explicitly not expected yet.",
        must: [
          {
            category: "Language & framework",
            title: "Java OOP & Spring Core basics",
            desc: "Solid Java fundamentals: OOP, collections & generics, exception handling; basic Spring Core concepts (IoC container, dependency injection, bean lifecycle).",
          },
          {
            category: "Dependency injection",
            title: "Stereotype annotations & constructor DI",
            desc: "Understands @Component/@Service/@Repository stereotypes and constructor-based dependency injection.",
          },
          {
            category: "Architecture",
            title: "Follows layered structure",
            desc: "Follows an existing layered structure (controller \u2192 service \u2192 repository) without needing to design it.",
          },
          {
            category: "API / networking",
            title: "Basic REST endpoints",
            desc: "Builds basic REST endpoints with Spring MVC (@RestController), understands HTTP verbs/status codes, JSON serialization.",
          },
          {
            category: "Database",
            title: "Basic SQL & Spring Data JPA CRUD",
            desc: "Basic SQL; uses Spring Data JPA/Hibernate for simple CRUD with an existing schema; understands what an ORM is doing conceptually.",
          },
          {
            category: "Testing",
            title: "Basic JUnit & Mockito",
            desc: "Writes basic unit tests with JUnit 5 and simple mocks (Mockito) on a guided task.",
          },
          {
            category: "Tooling",
            title: "Maven/Gradle & IDE debugging",
            desc: "Comfortable with Maven or Gradle, an IDE (IntelliJ), and reading build/test output to debug failures.",
          },
          {
            category: "Version control",
            title: "Git basics",
            desc: "Git basics, PR workflow, resolving straightforward conflicts.",
          },
          {
            category: "Soft skills",
            title: "Clear blockers & clarifying questions",
            desc: "Communicates blockers, applies code-review feedback, asks clarifying questions before starting ambiguous work.",
          },
        ],
        nice: [
          {
            title: "Used a message queue",
            desc: 'Exposure to a message queue (Kafka/RabbitMQ) at a "used it, didn\u2019t design it" level.',
          },
          {
            title: "Basic Docker familiarity",
            desc: "Can run a provided docker-compose setup.",
          },
          {
            title: "Spring Security awareness",
            desc: "Awareness of Spring Security basics: authentication vs. authorization concepts.",
          },
          {
            title: "Deployed personal API",
            desc: "A personal project with a deployed Spring Boot API, even on a free-tier cloud service.",
          },
          {
            title: "AI assistant comprehension",
            desc: "Comfortable using AI coding assistants while understanding what the generated code does.",
          },
        ],
      },
      {
        id: "mid",
        label: "Mid-Level",
        years: "2–5 years",
        calibration:
          "Independently designs and ships a service or well-scoped microservice, understands how it behaves under real traffic, and can reason about failure modes — not just happy-path correctness.",
        must: [
          {
            category: "Language & framework",
            title: "Strong Java & broader Spring ecosystem",
            desc: "Strong Java (streams, concurrency basics, generics in practice); solid grasp of Spring Data, Spring Security, Spring Validation, Actuator.",
          },
          {
            category: "Architecture",
            title: "Independent service layering",
            desc: "Designs a service\u2019s internal layering and package structure independently; knows sync REST vs. async messaging and when to use each.",
          },
          {
            category: "API / networking",
            title: "Resilient API design",
            desc: "Designs clean REST APIs (versioning, pagination, error-response conventions); integrates externally with timeouts, retries, circuit breakers (Resilience4j).",
          },
          {
            category: "Database",
            title: "Query tuning & migrations",
            desc: "Writes efficient JPA/Hibernate queries, understands and fixes N+1 problems, manages schema migrations (Flyway/Liquibase), basic query tuning.",
          },
          {
            category: "Messaging",
            title: "Correct Kafka produce/consume",
            desc: "Produces/consumes Kafka (or similar) messages correctly, understands idempotency and at-least-once delivery implications.",
          },
          {
            category: "Testing",
            title: "Testcontainers integration tests",
            desc: "Meaningful unit tests (JUnit 5 + Mockito) plus integration tests using Testcontainers against real Postgres/Kafka in Docker, not embedded fakes.",
          },
          {
            category: "Tooling & CI/CD",
            title: "CI pipelines & basic Kubernetes",
            desc: "Configures and debugs CI pipelines (GitHub Actions/Jenkins); containerizes services with Docker; comfortable with basic K8s concepts.",
          },
          {
            category: "Security",
            title: "JWT/OAuth2 auth & RBAC",
            desc: "Implements JWT/OAuth2-based authentication and role-based authorization with Spring Security.",
          },
          {
            category: "Observability",
            title: "Micrometer/OpenTelemetry instrumentation",
            desc: "Instruments services with Micrometer/OpenTelemetry for basic metrics and tracing; diagnoses slow queries and connection-pool exhaustion.",
          },
          {
            category: "Soft skills",
            title: "Peer review & on-call",
            desc: "Reviews peers\u2019 PRs substantively; estimates work with reasonable accuracy; participates in on-call rotation for their service.",
          },
        ],
        nice: [
          {
            title: "Reactive programming (WebFlux)",
            desc: "Experience with Spring WebFlux and Project Reactor (Mono/Flux) for high-throughput, non-blocking services.",
          },
          {
            title: "Hands-on cloud beyond deploy-once",
            desc: "Hands-on AWS/GCP/Azure experience — e.g., ECS/EKS, managed Kafka (MSK).",
          },
          {
            title: "Contract testing",
            desc: "Contract testing experience (Pact) for microservices boundaries.",
          },
          {
            title: "Redis caching",
            desc: "Familiarity with caching layers (Redis) for performance-critical paths.",
          },
          {
            title: "DDD at service boundaries",
            desc: "Exposure to Domain-Driven Design concepts applied at the service-boundary level.",
          },
        ],
      },
      {
        id: "senior",
        label: "Senior",
        years: "5+ years",
        calibration:
          "Defined by distributed-systems judgment — designing services that fail gracefully, scale predictably, and are debuggable in production by someone other than the author — plus explicit technical leadership.",
        must: [
          {
            category: "Language & framework",
            title: "JVM internals & advanced Spring Boot",
            desc: "Deep Java (JVM internals/memory model, concurrency, GC tuning awareness); expert Spring Boot including Actuator production-readiness and AOP where appropriate.",
          },
          {
            category: "Architecture",
            title: "Microservices architecture leadership",
            desc: "Leads service-boundary decisions, sync vs. event-driven communication, saga patterns for distributed transactions, API gateway/BFF patterns.",
          },
          {
            category: "Distributed systems",
            title: "Fault tolerance & failure-mode design",
            desc: "Designs for fault tolerance (circuit breakers, bulkheads, graceful degradation); understands failure modes across a distributed system.",
          },
          {
            category: "Database & data",
            title: "Data-store & scale decisions",
            desc: "Makes SQL vs. NoSQL trade-off calls, designs for scale (sharding, read replicas, caching strategy), owns schema evolution across services.",
          },
          {
            category: "Messaging & events",
            title: "Kafka architecture & consistency trade-offs",
            desc: "Architects event-driven systems with Kafka (partitioning, schema registry, idempotent processing); reasons about CAP-theorem-level trade-offs.",
          },
          {
            category: "Testing",
            title: "Org testing strategy incl. load testing",
            desc: "Owns Testcontainers-based integration testing, contract testing, and performance/load testing (Gatling, JMH for micro-benchmarks).",
          },
          {
            category: "Tooling & CI/CD",
            title: "CI/CD architecture & GitOps",
            desc: "Owns CI/CD architecture (Jenkins/GitHub Actions/GitLab CI, ArgoCD for GitOps deployments); drives release management practices.",
          },
          {
            category: "DevOps / deployment",
            title: "Container orchestration & IaC",
            desc: "Deep Docker/Kubernetes/Helm expertise; comfortable with Terraform; makes cloud-platform architecture decisions across AWS/GCP/Azure.",
          },
          {
            category: "Observability",
            title: "Org observability strategy",
            desc: "Designs distributed tracing (OpenTelemetry), metrics (Prometheus/Grafana, Micrometer), centralized logging, and SLO/alerting definitions.",
          },
          {
            category: "Security",
            title: "Security architecture ownership",
            desc: "Owns secrets management, service-to-service auth (mTLS, OAuth2 client-credentials), and compliance for regulated data.",
          },
          {
            category: "Leadership & scope",
            title: "Formal mentoring & cross-team initiatives",
            desc: "Mentors formally, leads RFCs, drives cross-team architecture, makes build-vs-buy calls, owns incident postmortems and systemic fixes.",
          },
        ],
        nice: [
          {
            title: "Documented scaling win",
            desc: "Track record scaling a system through a specific documented bottleneck, e.g. 400\u21921,400 TPS at p95 under 120ms.",
          },
          {
            title: "Service mesh experience",
            desc: "Experience with service mesh technology (Istio) for large microservices estates.",
          },
          {
            title: "Java/Spring OSS contributions",
            desc: "Contributions to major ecosystem projects: Spring, Hibernate, Testcontainers, Kafka clients.",
          },
          {
            title: "AI-powered backend integration",
            desc: "Experience integrating AI-powered features into backend services: LLM API integration, agentic workflows.",
          },
          {
            title: "Virtual threads (Java 21+)",
            desc: "Experience simplifying highly concurrent I/O-bound services with virtual threads.",
          },
          {
            title: "Shaped hiring/engineering standards",
            desc: "Directly shaped hiring bars, architecture guilds, or engineering-wide standards.",
          },
        ],
      },
    ],
  },
];

// ---- assign stable ids to seed skills ----
function assignIds(tracks) {
  for (const t of tracks) {
    for (const lvl of t.levels) {
      lvl.must.forEach((s, i) => {
        if (!s.id)
          s.id = `${t.id}-${lvl.id}-must-${i}-${Math.random().toString(36).slice(2, 7)}`;
      });
      lvl.nice.forEach((s, i) => {
        if (!s.id)
          s.id = `${t.id}-${lvl.id}-nice-${i}-${Math.random().toString(36).slice(2, 7)}`;
      });
    }
  }
  return tracks;
}

/** @type {{tracks:Track[], completed:string[], activeTrack:string, activeLevel:string, search:string, modal:null|object, pendingDelete:string|null, confirmResetKind:null|string, toast:string|null}} */
const state = {
  tracks: assignIds(JSON.parse(JSON.stringify(SEED_TRACKS))),
  completed: [],
  activeTrack: "flutter",
  activeLevel: "junior",
  search: "",
  modal: null,
  pendingDelete: null,
  confirmResetKind: null,
  toast: null,
  loaded: false,
};

const STORAGE_KEY = "skill-ladder-state-v1";
let toastTimer = null;

async function loadState() {
  try {
    const res = await window.storage.get(STORAGE_KEY, false);
    if (res && res.value) {
      const parsed = JSON.parse(res.value);
      if (parsed.tracks) state.tracks = parsed.tracks;
      if (parsed.completed) state.completed = parsed.completed;
      if (parsed.activeTrack) state.activeTrack = parsed.activeTrack;
      if (parsed.activeLevel) state.activeLevel = parsed.activeLevel;
    }
  } catch (e) {
    /* no saved state yet */
  }
  state.loaded = true;
  render();
}

async function persist() {
  try {
    await window.storage.set(
      STORAGE_KEY,
      JSON.stringify({
        tracks: state.tracks,
        completed: state.completed,
        activeTrack: state.activeTrack,
        activeLevel: state.activeLevel,
      }),
      false,
    );
  } catch (e) {
    console.error("Storage error", e);
  }
}

function showToast(msg) {
  state.toast = msg;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    state.toast = null;
    render();
  }, 2200);
}

// ---------- derived helpers ----------
function getTrack(id) {
  return state.tracks.find((t) => t.id === id);
}
function getLevel(track, id) {
  return track.levels.find((l) => l.id === id);
}

function levelProgress(level) {
  const total = level.must.length;
  const done = level.must.filter((s) => state.completed.includes(s.id)).length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function trackProgress(track) {
  let done = 0,
    total = 0;
  for (const lvl of track.levels) {
    const p = levelProgress(lvl);
    done += p.done;
    total += p.total;
  }
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function overallProgress() {
  let done = 0,
    total = 0;
  for (const t of state.tracks) {
    const p = trackProgress(t);
    done += p.done;
    total += p.total;
  }
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

// ---------- icons ----------
const ICONS = {
  check: `<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6.2L4.7 9L10 3" stroke="#0B0F17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2V14M2 8H14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  edit: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11.3 2.3a1.5 1.5 0 0 1 2.1 2.1L5.6 12.2l-2.9.8.8-2.9 7.8-7.8Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  trash: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 4.5h10M6.5 4.5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1.5M4.5 4.5V13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  search: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.4"/><path d="M13 13L10.3 10.3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  x: `<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 3L13 13M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  download: `<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M8 2V10.5M8 10.5L4.5 7M8 10.5L11.5 7M3 13.5H13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  refresh: `<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M13 4.5V2M13 4.5H10.5M13 4.5A6 6 0 1 0 14 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

// ---------- rendering ----------
function render() {
  const root = document.getElementById("root");
  if (!state.loaded) {
    root.innerHTML = `<div class="min-h-screen flex items-center justify-center">
      <p class="font-mono text-sm text-[var(--text-tertiary)]">loading skill ladder…</p>
    </div>`;
    return;
  }
  root.innerHTML = `
    ${renderHeader()}
    <main class="max-w-[1180px] mx-auto px-5 md:px-8 pb-24">
      ${renderTrackSelector()}
      ${renderLadder()}
      ${renderToolbar()}
      ${renderColumns()}
      ${renderFooterActions()}
    </main>
    ${renderModal()}
    ${renderToast()}
  `;
  attachHandlers();
}

function renderHeader() {
  const op = overallProgress();
  return `
  <header class="border-b border-[var(--border)]">
    <div class="max-w-[1180px] mx-auto px-5 md:px-8 py-8 flex items-end justify-between gap-6 flex-wrap rise-in">
      <div>
        <p class="font-mono text-[11px] tracking-wide text-[var(--text-tertiary)] mb-2">career self-assessment · 2026</p>
        <h1 class="font-display text-3xl md:text-[34px] font-semibold leading-tight">Skill Ladder</h1>
        <p class="text-[var(--text-secondary)] mt-1.5 max-w-md text-[14.5px]">Must-have and nice-to-have skills for Flutter, Angular, and Java/Spring Boot — by seniority.</p>
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <div class="text-right">
          <p class="font-display text-2xl font-semibold">${op.pct}%</p>
          <p class="font-mono text-[10.5px] text-[var(--text-tertiary)]">${op.done}/${op.total} must-haves</p>
        </div>
        <div class="ring ring-lg w-14 h-14" style="--pct:${op.pct}; --ring-color:#8D96AC;"></div>
      </div>
    </div>
  </header>`;
}

function renderTrackSelector() {
  return `
  <section class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
    ${state.tracks
      .map((t) => {
        const p = trackProgress(t);
        const active = t.id === state.activeTrack;
        return `
      <button data-action="select-track" data-track="${t.id}"
        class="text-left border ${active ? "border-[var(--accent-c)]" : "border-[var(--border)]"} bg-[var(--surface)] hover:bg-[var(--surface-hover)] p-4 transition-colors"
        style="${active ? `--accent-c:${t.accent}` : ""}">
        <div class="flex items-center gap-3 mb-3">
          <span class="font-mono text-[11px] font-medium w-9 h-9 flex items-center justify-center border" style="border-color:${t.accent}; color:${t.accent};">${t.abbr}</span>
          <div>
            <p class="font-display font-semibold text-[15px] leading-tight">${esc(t.name)}</p>
            <p class="text-[12px] text-[var(--text-tertiary)]">${esc(t.role)}</p>
          </div>
        </div>
        <div class="h-1 bg-[var(--border)] w-full overflow-hidden">
          <div class="h-full" style="width:${p.pct}%; background:${t.accent};"></div>
        </div>
        <div class="flex justify-between mt-1.5">
          <span class="font-mono text-[10.5px] text-[var(--text-tertiary)]">${p.pct}% mastered</span>
          <span class="font-mono text-[10.5px] text-[var(--text-tertiary)]">${p.done}/${p.total}</span>
        </div>
      </button>`;
      })
      .join("")}
  </section>`;
}

function renderLadder() {
  const track = getTrack(state.activeTrack);
  const accent = track.accent;
  return `
  <section class="mt-10">
    <div class="flex items-center gap-0 mb-6">
      ${track.levels
        .map((lvl, i) => {
          const p = levelProgress(lvl);
          const active = lvl.id === state.activeLevel;
          return `
        <div class="flex items-center ${i > 0 ? "flex-1" : ""}">
          ${i > 0 ? `<div class="h-px flex-1 bg-[var(--border)] mx-1"></div>` : ""}
          <button data-action="select-level" data-level="${lvl.id}" class="flex flex-col items-center gap-2 group">
            <div class="ring ${active ? "ring-lg w-16 h-16" : "ring-sm w-12 h-12"} transition-all duration-200 cursor-pointer"
              style="--pct:${p.pct}; --ring-color:${accent};">
              <span class="relative z-10 font-mono ${active ? "text-[13px]" : "text-[10.5px]"} font-medium" style="color:${active ? accent : "var(--text-secondary)"}">${p.pct}%</span>
            </div>
            <div class="text-center">
              <p class="font-display text-[13px] font-medium ${active ? "" : "text-[var(--text-secondary)]"}">${lvl.label}</p>
              <p class="font-mono text-[10px] text-[var(--text-tertiary)]">${lvl.years}</p>
            </div>
          </button>
        </div>`;
        })
        .join("")}
    </div>
    <div class="border-l-2 pl-4 py-1" style="border-color:${accent}">
      <p class="text-[13.5px] leading-relaxed text-[var(--text-secondary)] max-w-3xl">${esc(getLevel(track, state.activeLevel).calibration)}</p>
    </div>
  </section>`;
}

function renderToolbar() {
  return `
  <section class="mt-7 flex items-center gap-3 flex-wrap">
    <div class="flex items-center gap-2 border border-[var(--border)] px-3 py-2 bg-[var(--surface)] flex-1 min-w-[220px] max-w-sm">
      <span class="text-[var(--text-tertiary)]">${ICONS.search}</span>
      <input id="search-input" type="text" placeholder="Search skills in this level…" value="${esc(state.search)}"
        class="bg-transparent outline-none text-[13.5px] w-full placeholder:text-[var(--text-tertiary)]" />
    </div>
    <button data-action="open-add" data-type="must" class="font-mono text-[12px] px-3 py-2 border border-[var(--border)] hover:border-[var(--text-tertiary)] flex items-center gap-1.5 transition-colors">
      ${ICONS.plus} add must-have
    </button>
    <button data-action="open-add" data-type="nice" class="font-mono text-[12px] px-3 py-2 border border-[var(--border)] hover:border-[var(--text-tertiary)] flex items-center gap-1.5 transition-colors">
      ${ICONS.plus} add nice-to-have
    </button>
  </section>`;
}

function skillMatches(s) {
  if (!state.search.trim()) return true;
  const q = state.search.trim().toLowerCase();
  return (
    s.title.toLowerCase().includes(q) ||
    s.desc.toLowerCase().includes(q) ||
    (s.category || "").toLowerCase().includes(q)
  );
}

function renderSkillRow(s, type, accent) {
  const isDone = state.completed.includes(s.id);
  const pendingDel = state.pendingDelete === s.id;
  return `
  <div class="skill-row fade-row py-3.5 px-1 group" data-skill="${s.id}">
    <div class="flex items-start gap-3">
      ${
        type === "must"
          ? `
        <button data-action="toggle" data-id="${s.id}" class="checkbox mt-0.5 ${isDone ? "checked" : ""}" style="${isDone ? `background:${accent};border-color:${accent}` : ""}" aria-label="Mark complete">
          ${ICONS.check}
        </button>`
          : `<span class="mt-1.5 w-1.5 h-1.5 shrink-0" style="background:${accent}"></span>`
      }
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap mb-0.5">
          <p class="font-display text-[14px] font-medium ${isDone ? "line-through text-[var(--text-tertiary)]" : ""}">${esc(s.title)}</p>
          ${s.category ? `<span class="font-mono text-[10px] px-1.5 py-0.5 border border-[var(--border)] text-[var(--text-tertiary)]">${esc(s.category)}</span>` : ""}
        </div>
        <p class="text-[13px] leading-relaxed text-[var(--text-secondary)] ${isDone ? "opacity-60" : ""}">${esc(s.desc)}</p>
      </div>
      <div class="flex items-center gap-1 shrink-0 opacity-40 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        ${
          pendingDel
            ? `
          <button data-action="confirm-delete" data-id="${s.id}" class="font-mono text-[10.5px] px-2 py-1 text-[var(--danger)] border border-[var(--danger)]">delete?</button>
          <button data-action="cancel-delete" class="p-1.5 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]">${ICONS.x}</button>
        `
            : `
          <button data-action="open-edit" data-id="${s.id}" data-type="${type}" class="p-1.5 text-[var(--text-tertiary)] hover:text-[var(--text-primary)]" aria-label="Edit skill">${ICONS.edit}</button>
          <button data-action="ask-delete" data-id="${s.id}" class="p-1.5 text-[var(--text-tertiary)] hover:text-[var(--danger)]" aria-label="Delete skill">${ICONS.trash}</button>
        `
        }
      </div>
    </div>
  </div>`;
}

function renderColumns() {
  const track = getTrack(state.activeTrack);
  const lvl = getLevel(track, state.activeLevel);
  const must = lvl.must.filter(skillMatches);
  const nice = lvl.nice.filter(skillMatches);
  const p = levelProgress(lvl);

  return `
  <section class="mt-2 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
    <div>
      <div class="flex items-center justify-between mb-1 pb-3 border-b border-[var(--border)]">
        <h2 class="font-display text-[15px] font-semibold">Must-Have</h2>
        <span class="font-mono text-[11px] text-[var(--text-tertiary)]">${p.done}/${p.total} complete</span>
      </div>
      ${must.length ? must.map((s) => renderSkillRow(s, "must", track.accent)).join("") : emptyState("must")}
    </div>
    <div>
      <div class="flex items-center justify-between mb-1 pb-3 border-b border-[var(--border)]">
        <h2 class="font-display text-[15px] font-semibold text-[var(--text-secondary)]">Nice-to-Have</h2>
        <span class="font-mono text-[11px] text-[var(--text-tertiary)]">${nice.length} bonus</span>
      </div>
      ${nice.length ? nice.map((s) => renderSkillRow(s, "nice", track.accent)).join("") : emptyState("nice")}
    </div>
  </section>`;
}

function emptyState(type) {
  const label = type === "must" ? "must-have" : "nice-to-have";
  return `
  <div class="py-10 text-center">
    <p class="text-[13px] text-[var(--text-tertiary)] mb-3">${state.search.trim() ? `No ${label} skills match “${esc(state.search)}”.` : `No ${label} skills yet for this level.`}</p>
    ${!state.search.trim() ? `<button data-action="open-add" data-type="${type}" class="font-mono text-[12px] px-3 py-1.5 border border-[var(--border)] hover:border-[var(--text-tertiary)]">+ add one</button>` : ""}
  </div>`;
}

function renderFooterActions() {
  return `
  <section class="mt-14 pt-6 border-t border-[var(--border)] flex items-center justify-between flex-wrap gap-3">
    <p class="font-mono text-[10.5px] text-[var(--text-tertiary)]">Progress saves automatically to your account · edits are yours to make</p>
    <div class="flex items-center gap-2">
      <button data-action="export" class="font-mono text-[11px] px-2.5 py-1.5 border border-[var(--border)] hover:border-[var(--text-tertiary)] flex items-center gap-1.5">${ICONS.download} export progress</button>
      <button data-action="ask-reset" data-kind="progress" class="font-mono text-[11px] px-2.5 py-1.5 border ${state.confirmResetKind === "progress" ? "border-[var(--danger)] text-[var(--danger)]" : "border-[var(--border)] hover:border-[var(--text-tertiary)]"} flex items-center gap-1.5">
        ${ICONS.refresh} ${state.confirmResetKind === "progress" ? "click again to clear checks" : "reset progress"}
      </button>
      <button data-action="ask-reset" data-kind="all" class="font-mono text-[11px] px-2.5 py-1.5 border ${state.confirmResetKind === "all" ? "border-[var(--danger)] text-[var(--danger)]" : "border-[var(--border)] hover:border-[var(--text-tertiary)]"}">
        ${state.confirmResetKind === "all" ? "click again to restore defaults" : "restore defaults"}
      </button>
    </div>
  </section>`;
}

function renderModal() {
  if (!state.modal) return "";
  const m = state.modal;
  const isEdit = !!m.id;
  return `
  <div class="fixed inset-0 modal-backdrop flex items-center justify-center p-4 z-50" data-action="backdrop-close">
    <div class="bg-[var(--surface)] border border-[var(--border)] w-full max-w-md p-6" data-stop>
      <div class="flex items-center justify-between mb-5">
        <h3 class="font-display text-[16px] font-semibold">${isEdit ? "Edit skill" : "Add skill"}</h3>
        <button data-action="close-modal" class="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] p-1">${ICONS.x}</button>
      </div>
      <form data-action="submit-form" class="space-y-4">
        <div>
          <label class="font-mono text-[10.5px] text-[var(--text-tertiary)] block mb-1.5">list</label>
          <div class="flex gap-2">
            <label class="flex-1 flex items-center gap-2 border ${m.type === "must" ? "border-[var(--accent)]" : "border-[var(--border)]"} px-3 py-2 cursor-pointer">
              <input type="radio" name="type" value="must" ${m.type === "must" ? "checked" : ""} class="accent-[var(--accent)]" />
              <span class="text-[13px]">Must-Have</span>
            </label>
            <label class="flex-1 flex items-center gap-2 border ${m.type === "nice" ? "border-[var(--accent)]" : "border-[var(--border)]"} px-3 py-2 cursor-pointer">
              <input type="radio" name="type" value="nice" ${m.type === "nice" ? "checked" : ""} class="accent-[var(--accent)]" />
              <span class="text-[13px]">Nice-to-Have</span>
            </label>
          </div>
        </div>
        <div>
          <label class="font-mono text-[10.5px] text-[var(--text-tertiary)] block mb-1.5">category (optional)</label>
          <input name="category" type="text" value="${esc(m.category || "")}" placeholder="e.g. Testing" class="w-full border border-[var(--border)] px-3 py-2 text-[13.5px] outline-none focus:border-[var(--text-tertiary)]" />
        </div>
        <div>
          <label class="font-mono text-[10.5px] text-[var(--text-tertiary)] block mb-1.5">title</label>
          <input name="title" required type="text" value="${esc(m.title || "")}" placeholder="Skill name" class="w-full border border-[var(--border)] px-3 py-2 text-[13.5px] outline-none focus:border-[var(--text-tertiary)]" />
        </div>
        <div>
          <label class="font-mono text-[10.5px] text-[var(--text-tertiary)] block mb-1.5">description</label>
          <textarea name="desc" required rows="3" placeholder="What this looks like in practice" class="w-full border border-[var(--border)] px-3 py-2 text-[13.5px] outline-none focus:border-[var(--text-tertiary)] resize-none">${esc(m.desc || "")}</textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="submit" class="flex-1 py-2.5 font-mono text-[12.5px]" style="background:${getTrack(state.activeTrack).accent}; color:#0B0F17;">${isEdit ? "save changes" : "add skill"}</button>
          <button type="button" data-action="close-modal" class="px-4 py-2.5 font-mono text-[12.5px] border border-[var(--border)]">cancel</button>
        </div>
      </form>
    </div>
  </div>`;
}

function renderToast() {
  if (!state.toast) return "";
  return `<div class="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[var(--surface-alt)] border border-[var(--border)] px-4 py-2.5 font-mono text-[12px] z-50">${esc(state.toast)}</div>`;
}

// ---------- event handling ----------
function attachHandlers() {
  const root = document.getElementById("root");

  root.querySelectorAll('[data-action="select-track"]').forEach((el) =>
    el.addEventListener("click", () => {
      state.activeTrack = el.dataset.track;
      state.activeLevel = "junior";
      state.search = "";
      state.pendingDelete = null;
      persist();
      render();
    }),
  );

  root.querySelectorAll('[data-action="select-level"]').forEach((el) =>
    el.addEventListener("click", () => {
      state.activeLevel = el.dataset.level;
      state.pendingDelete = null;
      persist();
      render();
    }),
  );

  root.querySelectorAll('[data-action="toggle"]').forEach((el) =>
    el.addEventListener("click", () => {
      const id = el.dataset.id;
      const idx = state.completed.indexOf(id);
      if (idx >= 0) state.completed.splice(idx, 1);
      else state.completed.push(id);
      persist();
      render();
    }),
  );

  const searchInput = root.querySelector("#search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      const pos = e.target.selectionStart;
      render();
      const again = document.getElementById("search-input");
      if (again) {
        again.focus();
        again.setSelectionRange(pos, pos);
      }
    });
  }

  root.querySelectorAll('[data-action="open-add"]').forEach((el) =>
    el.addEventListener("click", () => {
      state.modal = {
        type: el.dataset.type,
        id: null,
        category: "",
        title: "",
        desc: "",
      };
      render();
    }),
  );

  root.querySelectorAll('[data-action="open-edit"]').forEach((el) =>
    el.addEventListener("click", () => {
      const track = getTrack(state.activeTrack);
      const lvl = getLevel(track, state.activeLevel);
      const list = el.dataset.type === "must" ? lvl.must : lvl.nice;
      const skill = list.find((s) => s.id === el.dataset.id);
      state.modal = {
        type: el.dataset.type,
        id: skill.id,
        category: skill.category || "",
        title: skill.title,
        desc: skill.desc,
      };
      render();
    }),
  );

  root.querySelectorAll('[data-action="close-modal"]').forEach((el) =>
    el.addEventListener("click", () => {
      state.modal = null;
      render();
    }),
  );
  const backdrop = root.querySelector('[data-action="backdrop-close"]');
  if (backdrop)
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        state.modal = null;
        render();
      }
    });

  const form = root.querySelector('[data-action="submit-form"]');
  if (form)
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const type = fd.get("type");
      const category = fd.get("category").toString().trim();
      const title = fd.get("title").toString().trim();
      const desc = fd.get("desc").toString().trim();
      if (!title || !desc) return;
      const track = getTrack(state.activeTrack);
      const lvl = getLevel(track, state.activeLevel);
      const list = type === "must" ? lvl.must : lvl.nice;
      if (state.modal.id) {
        const skill = list.find((s) => s.id === state.modal.id);
        const otherList = type === "must" ? lvl.nice : lvl.must;
        if (state.modal.type !== type) {
          const origList = state.modal.type === "must" ? lvl.must : lvl.nice;
          const idx = origList.findIndex((s) => s.id === state.modal.id);
          const [moved] = origList.splice(idx, 1);
          moved.category = category;
          moved.title = title;
          moved.desc = desc;
          list.push(moved);
        } else {
          skill.category = category;
          skill.title = title;
          skill.desc = desc;
        }
        showToast("Skill updated");
      } else {
        const id = `${track.id}-${lvl.id}-${type}-custom-${Date.now()}`;
        list.push({ id, category, title, desc });
        showToast("Skill added");
      }
      state.modal = null;
      persist();
      render();
    });

  root.querySelectorAll('[data-action="ask-delete"]').forEach((el) =>
    el.addEventListener("click", () => {
      state.pendingDelete = el.dataset.id;
      render();
    }),
  );
  root.querySelectorAll('[data-action="cancel-delete"]').forEach((el) =>
    el.addEventListener("click", () => {
      state.pendingDelete = null;
      render();
    }),
  );
  root.querySelectorAll('[data-action="confirm-delete"]').forEach((el) =>
    el.addEventListener("click", () => {
      const id = el.dataset.id;
      const track = getTrack(state.activeTrack);
      const lvl = getLevel(track, state.activeLevel);
      lvl.must = lvl.must.filter((s) => s.id !== id);
      lvl.nice = lvl.nice.filter((s) => s.id !== id);
      state.completed = state.completed.filter((cid) => cid !== id);
      state.pendingDelete = null;
      showToast("Skill deleted");
      persist();
      render();
    }),
  );

  root.querySelectorAll('[data-action="ask-reset"]').forEach((el) =>
    el.addEventListener("click", () => {
      const kind = el.dataset.kind;
      if (state.confirmResetKind === kind) {
        if (kind === "progress") {
          state.completed = [];
          showToast("Progress cleared");
        } else {
          state.tracks = assignIds(JSON.parse(JSON.stringify(SEED_TRACKS)));
          state.completed = [];
          showToast("Restored to defaults");
        }
        state.confirmResetKind = null;
        persist();
        render();
      } else {
        state.confirmResetKind = kind;
        render();
        setTimeout(() => {
          if (state.confirmResetKind === kind) {
            state.confirmResetKind = null;
            render();
          }
        }, 3000);
      }
    }),
  );

  root.querySelectorAll('[data-action="export"]').forEach((el) =>
    el.addEventListener("click", () => {
      const op = overallProgress();
      const payload = {
        exportedAt: new Date().toISOString(),
        overall: op,
        tracks: state.tracks.map((t) => ({
          name: t.name,
          role: t.role,
          progress: trackProgress(t),
          levels: t.levels.map((l) => ({
            label: l.label,
            progress: levelProgress(l),
            completedSkills: l.must
              .filter((s) => state.completed.includes(s.id))
              .map((s) => s.title),
          })),
        })),
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "skill-ladder-progress.json";
      a.click();
      URL.revokeObjectURL(url);
      showToast("Progress exported");
    }),
  );

  document.addEventListener("keydown", escHandler);
}

function escHandler(e) {
  if (e.key === "Escape" && state.modal) {
    state.modal = null;
    render();
  }
}

loadState();
