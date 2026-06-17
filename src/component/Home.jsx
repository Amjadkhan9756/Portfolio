import "./Home.css";
import profileImg from "/public/image/image.png";

function CubeFace({ className }) {
    return <div className={`cube-face ${className}`} />;
}

function Cube({ variant = "" }) {
    const faces = ["front", "back", "left", "right", "top", "bot"];
    return (
        <div className={`cube ${variant ? `cube--${variant}` : ""}`}>
            {faces.map((f) => <CubeFace key={f} className={`face-${f}`} />)}
        </div>
    );
}

export function Home() {
    return (
        <div className="home-root">

            {/* Hex grid background */}
            <svg className="bg-hex" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hxp" x="0" y="0" width="52" height="60" patternUnits="userSpaceOnUse">
                        <polygon points="26,2 50,15 50,45 26,58 2,45 2,15" fill="none" stroke="#1acb8a" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hxp)" />
            </svg>

            {/* Star field */}
            <svg className="bg-stars" xmlns="http://www.w3.org/2000/svg">
                {[
                    { cx: "6%", cy: "18%", r: 1.2, c: "#1acb8a", d: 0, dur: 3.1 },
                    { cx: "14%", cy: "70%", r: 1, c: "#1acb8a", d: .5, dur: 4.3 },
                    { cx: "24%", cy: "32%", r: 1.4, c: "#ffffff", d: 1, dur: 2.9, o: .15 },
                    { cx: "36%", cy: "85%", r: 1, c: "#1acb8a", d: .2, dur: 5 },
                    { cx: "46%", cy: "14%", r: 1.2, c: "#ffffff", d: 1.5, dur: 3.6, o: .12 },
                    { cx: "56%", cy: "58%", r: 1, c: "#1acb8a", d: .8, dur: 4.7 },
                    { cx: "63%", cy: "9%", r: 1.5, c: "#1acb8a", d: 2, dur: 2.5 },
                    { cx: "72%", cy: "44%", r: 1, c: "#ffffff", d: .3, dur: 4, o: .18 },
                    { cx: "82%", cy: "76%", r: 1.2, c: "#1acb8a", d: 1.2, dur: 4.4 },
                    { cx: "90%", cy: "26%", r: 1, c: "#1acb8a", d: .7, dur: 3.3 },
                ].map((s, i) => (
                    <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.c}
                        style={{ animation: `twinkle ${s.dur}s ${s.d}s ease-in-out infinite`, opacity: s.o ?? 1 }} />
                ))}
            </svg>

            {/* 3D cubes */}
            <div className="scene-3d">
                <div className="cube-wrap cube-wrap--lg"><Cube /></div>
                <div className="cube-wrap cube-wrap--sm"><Cube variant="var2" /></div>
                <div className="cube-wrap cube-wrap--xs"><Cube variant="var3" /></div>
                <div className="cube-wrap cube-wrap--md"><Cube variant="var2" /></div>
            </div>

            {/* Teal blobs */}
            <div className="blob blob--top" />
            <div className="blob blob--bottom" />

            {/* Orbit rings */}
            <svg className="orbit-svg" viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(115,115)">
                    <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(26,203,138,.15)" strokeWidth="1" style={{ animation: "avatarRingOrbit 20s linear infinite", transformOrigin: "0 0" }} />
                    <circle cx="0" cy="0" r="72" fill="none" stroke="rgba(26,203,138,.10)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: "avatarRingOrbit 14s linear infinite reverse", transformOrigin: "0 0" }} />
                    <circle cx="0" cy="0" r="46" fill="none" stroke="rgba(26,203,138,.08)" strokeWidth="0.8" style={{ animation: "avatarRingOrbit 28s linear infinite", transformOrigin: "0 0" }} />
                    <circle cx="0" cy="-100" r="4" fill="rgba(26,203,138,.25)" stroke="#1acb8a" strokeWidth="0.8">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="-72" r="3" fill="rgba(26,203,138,.3)" stroke="#1acb8a" strokeWidth="0.8">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="14s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="-46" r="2.5" fill="rgba(26,203,138,.4)" stroke="#1acb8a" strokeWidth="0.8">
                        <animateTransform attributeName="transform" type="rotate" from="180 0 0" to="540 0 0" dur="28s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="12" fill="rgba(26,203,138,.08)" stroke="rgba(26,203,138,.4)" strokeWidth="1" />
                    <circle cx="0" cy="0" r="5" fill="rgba(26,203,138,.6)">
                        <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values=".5;1;.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>

            {/* Scan beam */}
            <div className="scan-beam" />

            {/* Particles */}
            {[
                { left: "8%", dur: "16s", delay: "0s", dx: "18px" },
                { left: "20%", dur: "11s", delay: "2s", dx: "-14px" },
                { left: "33%", dur: "19s", delay: "4s", dx: "26px" },
                { left: "47%", dur: "13s", delay: "1s", dx: "-18px" },
                { left: "60%", dur: "15s", delay: "6s", dx: "12px" },
                { left: "74%", dur: "20s", delay: "3s", dx: "-22px" },
                { left: "88%", dur: "14s", delay: "8s", dx: "16px" },
            ].map((p, i) => (
                <div key={i} className="particle" style={{
                    width: i % 3 === 0 ? "3px" : "2px",
                    height: i % 3 === 0 ? "3px" : "2px",
                    left: p.left, bottom: 0,
                    animationDuration: p.dur,
                    animationDelay: p.delay,
                    "--dx": p.dx,
                }} />
            ))}

            {/* Corner brackets */}
            <div className="corner corner--tl" />
            <div className="corner corner--tr" />
            <div className="corner corner--bl" />
            <div className="corner corner--br" />

            {/* Ping dot */}
            <div className="ping-wrap">
                <div className="ping-dot">
                    <span className="ping-ring" />
                    <span className="ping-ring ping-ring--2" />
                </div>
            </div>

            {/* Hero card */}
            <div className="hero-card">

                {/* Avatar */}
                <div className="avatar">
                    <img src={profileImg} alt="Amjad profile photo" />
                    <div className="avatar-ring" />
                    <div className="avatar-ring avatar-ring--2" />
                </div>

                {/* Text */}
                <div className="hero-info">
                    <p className="hero-name-tag">Amjad</p>
                    <h1 className="hero-headline">
                        Where the stack meets<br />intelligence.
                    </h1>
                    <p className="hero-roles">
                        Full Stack Developer
                        <span className="sep">·</span>
                        MERN Developer
                        <span className="sep">·</span>
                        TypeScript &amp; Next.js
                    </p>
                </div>

            </div>
        </div>
    );
}




