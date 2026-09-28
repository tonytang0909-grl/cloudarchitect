'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { motion, MotionConfig } from 'motion/react';
import OrkestFlow from '@/components/OrkestFlow';
import MicroPimDiff from '@/components/MicroPimDiff';
import OrderValidator from '@/components/OrderValidator';
import { ArrowUpRight, ArrowDown, MoveUpRight, Pause, Play, RotateCcw, X, Check, Copy, Zap, Command, Cloud, Code2, Workflow, MousePointer2 } from 'lucide-react';

const projects = [
  { id: '01', name: 'lamb', type: 'DEVELOPER EXPERIENCE', description: 'Real cloud inputs. Local breakpoints. Zero redeploys.', detail: 'A Go CLI that captures live Step Function state inputs and replays them locally with your debugger attached. Built to make the hardest part of serverless development feel a little more human.', tags: ['Go', 'AWS Lambda', 'Step Functions'], color: 'purple', metric: '85%', metricLabel: 'shorter debug cycles', challenge: 'Debugging live serverless workflows meant repeatedly deploying code just to inspect real inputs.', solution: 'Capture the execution, replay it locally, and step through the payload in VS Code or WebStorm.' },
  { id: '02', name: 'Less glue. More flow.', type: 'INTEGRATION ARCHITECTURE', description: 'Complex connections. Refreshingly simple configuration.', detail: 'A composable integration platform that separates reusable adapters, business rules, and infrastructure. Client-specific repositories become configuration instead of another monolith.', tags: ['TypeScript', 'AWS', 'Composable systems'], color: 'pink', metric: '<100', metricLabel: 'lines of client configuration', challenge: 'Every new client integration became a separate codebase with thousands of lines of tightly coupled logic.', solution: 'Separate protocol adapters from business rules, then compose a pipeline with reusable plugin phases.' },
  { id: '03', name: 'Orkest', type: 'WORKFLOW AUTOMATION', description: 'From “what if” to workflow. Visually.', detail: 'A visual workflow automation engine for BigCommerce. Connect triggers, conditions, loops, AI, and actions to turn commerce operations into repeatable processes.', tags: ['BigCommerce', 'Gadget.dev', 'Workflows'], color: 'lime', metric: '5', metricLabel: 'building blocks, endless combinations', challenge: 'Commerce teams need flexible automation without writing a new integration for every operational task.', solution: 'Give teams visual building blocks for triggers, conditions, loops, AI, and actions.' },
  { id: '04', name: 'Micro PIM', type: 'PRODUCT ENRICHMENT', description: 'Fresh supplier data. Your best edits, protected.', detail: 'A product enrichment app built with Gadget.dev for BigCommerce. Configurable supplier sources, full and delta syncs, and a webhook-maintained copy of store products support a three-way comparison before changes are pushed.', tags: ['BigCommerce', 'Gadget.dev', 'Three-way diff'], color: 'pink', metric: '3', metricLabel: 'versions. One informed decision.', challenge: 'The app is not the only source of truth: merchants also edit products directly in BigCommerce. Supplier updates can drift from those edits and from the last sync snapshot.', solution: 'Compare the last persisted sync snapshot, current BigCommerce data, and incoming vendor data side by side. Merchants can decide what to override, enrich the product, and push their chosen changes.' },
  { id: '05', name: 'Order Validator', type: 'VISUAL WORKFLOW COMPILER', description: 'Design once. Compile the flow. Deploy across clients.', detail: 'An AWS-based order validation platform built for another company. A drag-and-drop design-time frontend produces JSON flow definitions that can be compiled and deployed to any pre-configured client. User management uses Cognito alongside RDS Serverless; the core flow uses DynamoDB and S3.', tags: ['AWS', 'Cognito', 'RDS Serverless', 'DynamoDB', 'S3'], color: 'purple', metric: 'JSON', metricLabel: 'from visual design to client deployment', challenge: 'A visual workflow needs a reusable execution definition, a way to target configured clients, and an intuitive way to express Map-state scope.', solution: 'Compile the designed flow into a deployable definition. Any actions placed inside a dedicated canvas area become the body of a Map state. This adds spatial compilation and client-targeted deployment to the visual automation approach demonstrated by Orkest.' },
];
const stack = ['AWS', 'TypeScript', 'Go', 'Node.js', 'BigCommerce', 'Gadget.dev', 'Magento', 'Java'];

function Playground({ paused }: { paused: boolean }) {
  const bounds = useRef<HTMLDivElement>(null);
  const [generation, setGeneration] = useState(0);
  const [pulses, setPulses] = useState(0);
  return <div className={`playground ${paused ? 'is-paused' : ''}`} ref={bounds}>
    <div className="playground-grid" />
    <span className="play-label"><span className="status-dot" /> SYSTEM PLAYGROUND / V.01</span>
    <button className="reset" aria-label="Reset playground positions" onClick={() => { setGeneration(g => g + 1); setPulses(0); }}><RotateCcw size={15} /></button>
    <svg className="connectors" viewBox="0 0 600 530" fill="none" aria-hidden="true"><path d="M120 150 Q300 70 450 175 T470 380 M120 150 Q90 350 290 340 T450 175 M290 340L150 425" /><circle cx="290" cy="340" r="125" /><circle cx="290" cy="340" r="190" /></svg>
    <motion.div key={`cloud-${generation}`} drag dragConstraints={bounds} dragElastic={0.12} className="toy cloud-toy" whileDrag={{ scale: 1.1, rotate: -8 }}><Cloud size={48} strokeWidth={1.4} /><span>CLOUD NATIVE</span></motion.div>
    <motion.div key={`code-${generation}`} drag dragConstraints={bounds} dragElastic={0.12} className="toy code-toy" whileDrag={{ scale: 1.1, rotate: 8 }}><Code2 size={35} /><span>MAKE IT WORK.<br />THEN MAKE IT BETTER.</span></motion.div>
    <motion.button key={`core-${generation}`} drag dragConstraints={bounds} dragElastic={0.1} className="toy core-toy" whileTap={{ scale: .92 }} onClick={() => setPulses(p => p + 1)} aria-label="Send a signal through the system"><span className="core-star">✳</span><span>{pulses ? `SIGNAL ${String(pulses).padStart(2, '0')} SENT ↗` : 'CONNECT THE DOTS'}</span></motion.button>
    <motion.div key={`flow-${generation}`} drag dragConstraints={bounds} className="toy flow-toy" whileDrag={{ scale: 1.1 }}><Workflow size={29} /><span>EVERYTHING<br />IS CONNECTED.</span></motion.div>
    <div className="orbit-dot dot-a" /><div className="orbit-dot dot-b" />
    <span className="play-hint"><MousePointer2 size={13} /> DRAG THINGS. SEND A SIGNAL. PLAY.</span>
    <span className="floating-note">a little order<br />in the chaos. <span>↴</span></span>
  </div>;
}

function Demo({ index, paused }: { index: number; paused: boolean }) {
  const [step, setStep] = useState(-1);
  useEffect(() => {
    if (step < 0 || step > 4) return;
    const timer = setTimeout(() => setStep(s => s + 1), paused ? 160 : 550);
    return () => clearTimeout(timer);
  }, [step, paused]);
  const running = step >= 0 && step < 5;
  return <div className={`demo demo-${index}`}>
    <div className="demo-header"><span><i /><i /><i /></span><span>{index === 0 ? 'lamb — local replay' : index === 1 ? 'integration.config.ts' : 'orkest / workflow canvas'}</span><span>↗</span></div>
    {index === 0 ? <div className="terminal"><p><span>~</span> lamb replay --latest</p><p className={step >= 0 ? 'lit' : ''}>↳ Capture execution input</p><p className={step >= 2 ? 'lit' : ''}>↳ Attach local debugger</p><p className={step >= 4 ? 'lit' : ''}>↳ Breakpoint hit. You’re in.</p><span className="terminal-cursor">▊</span></div> : index === 1 ? <div className="integration-demo"><div className="system-pill">SHOPIFY</div><div className={`integration-core ${running ? 'running' : ''}`}>✳</div><div className="system-pill">SAP</div><span className="config-label">{step >= 5 ? '✓ Payload transformed & delivered' : 'one core. many possibilities.'}</span></div> : <div className="workflow-demo">{[Zap, Workflow, Command, ArrowUpRight].map((Icon, i) => <div className={step >= i ? 'workflow-node lit' : 'workflow-node'} key={i}><Icon size={22} /><span>{['TRIGGER', 'CONDITION', 'AI', 'ACTION'][i]}</span></div>)}</div>}
    <button className="demo-run" disabled={running} onClick={() => setStep(0)}>{running ? 'Running demo…' : step >= 5 ? 'Run again' : 'Run demo'} {step >= 5 ? <RotateCcw size={13} /> : <Play size={12} />}</button><span className="demo-caption">INTERACTIVE SIMULATION</span>
  </div>;
}

const subscribeMotion = (callback: () => void) => { const media = window.matchMedia("(prefers-reduced-motion: reduce)"); media.addEventListener("change", callback); return () => media.removeEventListener("change", callback); };
const readMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Portfolio() {
  const reducedMotion = useSyncExternalStore(subscribeMotion, readMotion, () => false);
  const [motionOverride, setPaused] = useState<boolean | null>(null);
  const paused = motionOverride ?? reducedMotion;
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (activeProject === null) return;
    document.body.style.overflow = 'hidden'; closeRef.current?.focus();
    const keydown = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveProject(null); if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus(); } };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', keydown); triggerRef.current?.focus(); };
  }, [activeProject]);
  async function copyEmail() { try { await navigator.clipboard.writeText('tonytang1199@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 2200); } catch { window.location.href = 'mailto:tonytang1199@gmail.com'; } }
  const project = activeProject === null ? null : projects[activeProject];
  return <MotionConfig reducedMotion={paused ? 'always' : 'user'}><div className={paused ? 'site motion-paused' : 'site'}>
    <a className="skip-link" href="#work">Skip to selected work</a>
    <header className="header"><a href="#home" className="wordmark" aria-label="Tony Tang home">tony<span>®</span></a><nav aria-label="Main navigation"><a href="#work">Selected work <span>{String(projects.length).padStart(2, '0')}</span></a><a href="#about">The human</a><a href="mailto:tonytang1199@gmail.com" className="nav-contact">Let’s talk <ArrowUpRight size={16} /></a></nav><button className="motion-toggle" aria-label={paused ? 'Enable animations' : 'Pause animations'} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>MOTION {paused ? 'OFF' : 'ON'}</span></button></header>
    <main>
      <section id="home" className="hero"><div className="hero-top"><span><span className="status-dot" /> TONY TANG · DEVELOPER & CLOUD ARCHITECT</span><span>ADELAIDE, AU ↗</span></div><div className="hero-layout"><div className="hero-copy"><span className="eyebrow">SERIOUS ENGINEERING. PLAYFUL THINKING.</span><h1>I connect<br />the <span className="outline-word">dis</span><br /><span className="connected">connected<span className="period">.</span><svg viewBox="0 0 580 28" aria-hidden="true"><path d="M4 21Q220 0 571 12M34 26Q280 8 550 22" /></svg></span></h1><div className="hero-bottom"><p>I turn complex systems into things<br className="desktop-break" /> that just <em>work.</em> A little curiosity.<br className="desktop-break" /> A lot of connecting the dots.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={28} /></a></div></div><Playground paused={paused} /></div><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>CODE WITH PURPOSE. BUILD WITH PERSONALITY.</span><span>↓</span></div></section>
      <div className="ticker" aria-hidden="true"><div>{[0, 1, 2, 3].map(i => <span key={i}>COMPLEXITY, SIMPLIFIED <b>✳</b> IDEAS, CONNECTED <b>✳</b> SYSTEMS, REIMAGINED <b>✳</b> </span>)}</div></div>
      <section id="work" className="work section"><div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Less friction.<br />More <span className="serif">possibility.</span></h2></div><p>Tools that get out of your way.<br />Systems that bring things together.<br />A few things I’ve built.</p></div><div className="projects">{projects.map((p, index) => <article className={`project ${p.color} ${index === 2 ? "orkest-feature" : index === 3 ? "pim-feature" : index === 4 ? "validator-feature" : ""}`} key={p.id}><div className="project-top"><span>{p.id} / {p.type}</span><span>↗</span></div>{index === 2 ? <OrkestFlow paused={paused} /> : index === 3 ? <MicroPimDiff paused={paused} /> : index === 4 ? <OrderValidator paused={paused} /> : <Demo index={index} paused={paused} />}<div className="project-info"><h3>{p.name}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><button onClick={e => { triggerRef.current = e.currentTarget; setActiveProject(index); }}>Behind the build <ArrowUpRight size={20} /></button></div></article>)}</div></section>
      <section id="about" className="about section"><div className="about-art" aria-hidden="true"><span className="eyebrow">THE HUMAN BEHIND THE SYSTEMS</span><div className="smiley"><div className="eyes"><i /><i /></div><div className="smile" /></div><span className="about-sticker">ENGINEER BY TRADE.<br />CURIOUS BY DEFAULT.</span><span className="art-corner">TT — EST. ALWAYS LEARNING</span></div><div className="about-copy"><span className="eyebrow">02 / HELLO, I’M TONY</span><h2>A systems mind.<br />A <span className="serif">builder’s</span> heart.</h2><p>I’m Zhuang Tang—Tony for short. An integration developer and cloud architect who enjoys making complicated things feel simple.</p><p>My path has taken me from electronics and airport infrastructure to software and serverless systems. The common thread? Understanding how things fit together, then finding a better way.</p><div className="now"><span className="status-dot" /><span>Currently building at <strong>Aligent Consulting</strong></span><ArrowUpRight size={18} /></div><a href="https://linkedin.com/in/zhuangtang" target="_blank" rel="noreferrer">More of my story <ArrowUpRight size={17} /></a></div></section>
      <section id="stack" className="stack section"><div className="stack-heading"><span className="eyebrow">03 / THE TOOLBOX</span><p>Good tools. <span className="serif">Better together.</span></p></div><div className="stack-list">{stack.map((item, i) => <span tabIndex={0} key={item}><span className="stack-number">0{i + 1}</span>{item}<MoveUpRight size={22} /></span>)}</div></section>
      <section className="contact section" id="contact"><div className="contact-top"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><span>LET’S CONNECT THE DOTS.</span></div><a className="contact-title" href="mailto:tonytang1199@gmail.com">Let’s make<br /><span className="serif">something</span> click.<ArrowUpRight /></a><div className="contact-bottom"><button onClick={copyEmail}>{copied ? 'Email copied!' : 'tonytang1199@gmail.com'}{copied ? <Check size={16} /> : <Copy size={16} />}</button><div><a href="https://github.com/tonytang0909-grl" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a><a href="https://linkedin.com/in/zhuangtang" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div></div></section>
    </main><footer><span>© {new Date().getFullYear()} TONY TANG</span><span>BUILT WITH INTENTION. AND A LITTLE PLAY.</span><a href="#home">BACK TO TOP ↑</a></footer>
    {project && <div className="modal-backdrop" onClick={() => setActiveProject(null)}><section role="dialog" aria-modal="true" aria-labelledby="project-title" className={`project-modal ${project.color}`} onClick={e => e.stopPropagation()}><button ref={closeRef} className="modal-close" aria-label="Close project details" onClick={() => setActiveProject(null)}><X /></button><span className="eyebrow">{project.type}</span><h2 id="project-title">{project.name}</h2><p>{project.detail}</p><div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><h3>The challenge</h3><p>{project.challenge}</p><h3>The approach</h3><p>{project.solution}</p><div className="project-tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div></section></div>}
  </div></MotionConfig>;
}
