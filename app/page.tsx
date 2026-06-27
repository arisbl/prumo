"use client";

import { useEffect } from "react";
import "./prumo-landing.css";

// Markup preservado byte a byte a partir de referencia/prumo-landing.html
// (corpo do <body>, sem o <script> — esse roda no useEffect abaixo).
const MARKUP = `
<!-- ambient background -->
<div class="bg-fx" aria-hidden="true">
  <div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div>
</div>
<div class="dots" aria-hidden="true"></div>

<!-- NAV -->
<nav>
  <div class="wrap nav-in">
    <a class="brand" href="#top" aria-label="Prumo">
      <svg class="mark" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0C264"/><stop offset="100%" stop-color="#C7882B"/></linearGradient></defs>
        <rect x="6" y="6" width="68" height="68" rx="20" fill="url(#g)"/>
        <rect x="26" y="32" width="28" height="22" rx="7" fill="none" stroke="#fff" stroke-width="4"/>
        <g class="r-eyes"><path d="M34 41 L34 46 M46 41 L46 46" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>
        <line x1="22.5" y1="39" x2="22.5" y2="45" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="57.5" y1="39" x2="57.5" y2="45" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="40" y1="23" x2="40" y2="32" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
        <circle class="r-ant" cx="40" cy="21" r="3" fill="#fff"/>
      </svg>
      <span class="name"><b>P</b>rumo</span>
    </a>
    <a href="#comecar" class="btn btn-gold">Começar agora</a>
  </div>
</nav>

<span id="top"></span>

<!-- HERO -->
<header class="hero">
  <div class="wrap hero-grid">
    <div class="hero-left">
      <span class="eyebrow">Automação · cripto · controle de risco</span>
      <h1>Automatize suas operações. <span class="accent">Inteligente e disciplinado.</span></h1>
      <p class="lead">O Prumo opera na sua própria conta, sem emoção e dentro dos limites que você define. Você no controle, a máquina na execução.</p>
      <div class="hero-cta">
        <a href="#comecar" class="btn btn-gold btn-lg">Começar agora</a>
        <a href="#como" class="btn btn-ghost btn-lg">Como funciona</a>
      </div>
      <div class="hero-note"><span class="dot"></span> Opera na sua própria conta · você no controle, sempre.</div>
    </div>

    <div class="chart-card" aria-hidden="true">
      <div class="chart-head">
        <span class="t">
          <svg class="rb" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="grb" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0C264"/><stop offset="100%" stop-color="#C7882B"/></linearGradient></defs>
            <rect x="6" y="6" width="68" height="68" rx="20" fill="url(#grb)"/>
            <rect x="26" y="32" width="28" height="22" rx="7" fill="none" stroke="#fff" stroke-width="4"/>
            <g class="r-eyes"><path d="M34 41 L34 46 M46 41 L46 46" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>
            <line x1="22.5" y1="39" x2="22.5" y2="45" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="57.5" y1="39" x2="57.5" y2="45" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="40" y1="23" x2="40" y2="32" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <circle class="r-ant" cx="40" cy="21" r="3" fill="#fff"/>
          </svg>
          BTC/USDT
        </span>
        <span class="tag"><span class="lv"></span> monitorando</span>
      </div>
      <svg class="chart-svg" viewBox="0 0 460 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#46AEC8" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#46AEC8" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <g stroke="#1F2630" stroke-width="1"><line x1="0" y1="60" x2="460" y2="60"/><line x1="0" y1="120" x2="460" y2="120"/><line x1="0" y1="180" x2="460" y2="180"/></g>
        <line x1="0" y1="212" x2="460" y2="212" stroke="#E8B65A" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.7"/>
        <text x="8" y="205" fill="#E8B65A" font-family="'Space Mono',monospace" font-size="11" opacity="0.8">LIMITE DE PERDA</text>
        <path class="draw-area" d="M30 170 L120 135 L210 145 L300 128 L380 104 L445 111 L445 240 L30 240 Z" fill="url(#area)" opacity="0"/>
        <path class="draw" d="M30 170 L120 135 L210 145 L300 128 L380 104 L445 111" stroke="#EAEFF5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.95"/>
        <!-- trade tags -->
        <text class="tag-fade" x="98" y="126" fill="#46AEC8" font-family="'Space Mono',monospace" font-size="11" font-weight="700">+$100</text>
        <text class="tag-fade" x="188" y="163" fill="#E5777B" font-family="'Space Mono',monospace" font-size="11" font-weight="700">-$30</text>
        <text class="tag-fade" x="280" y="119" fill="#46AEC8" font-family="'Space Mono',monospace" font-size="11" font-weight="700">+$50</text>
        <text class="tag-fade" x="356" y="95" fill="#46AEC8" font-family="'Space Mono',monospace" font-size="11" font-weight="700">+$70</text>
        <text class="tag-fade" x="402" y="130" fill="#E5777B" font-family="'Space Mono',monospace" font-size="11" font-weight="700">-$20</text>
        <!-- vertex dots -->
        <circle class="fade-dot" cx="120" cy="135" r="3.2" fill="#46AEC8"/>
        <circle class="fade-dot" cx="210" cy="145" r="3.2" fill="#E5777B"/>
        <circle class="fade-dot" cx="300" cy="128" r="3.2" fill="#46AEC8"/>
        <circle class="fade-dot" cx="380" cy="104" r="3.6" fill="#E8B65A"/>
        <circle class="pulse" cx="445" cy="111" r="5" fill="#46AEC8"/>
      </svg>
      <div class="chart-cap">Ganhos e perdas — cada operação dentro do plano, sempre <span>sob controle.</span></div>
    </div>
  </div>
</header>

<!-- FREE BANNER -->
<section class="free-banner" aria-label="Comece de graça">
  <div class="wrap">
    <div class="free-card reveal">
      <span class="free-badge"><span class="free-dot"></span> Comece de graça</span>
      <h2>Teste o Prumo sem arriscar um centavo.</h2>
      <p>Antes de conectar dinheiro real, rode o Prumo em modo simulação: ele opera com dinheiro fictício, nas condições reais do mercado, e você acompanha cada decisão do robô na prática. Veja a disciplina funcionando com os próprios olhos — e só passe para o dinheiro real quando você decidir.</p>
      <ul class="free-reforcos">
        <li><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>Risco zero — dinheiro fictício, nada do seu em jogo</span></li>
        <li><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>Mercado real — o robô opera nas condições de verdade</span></li>
        <li><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>Sem compromisso — vire dinheiro real só quando quiser</span></li>
      </ul>
      <a href="#" class="btn btn-gold btn-lg" id="ctaFree">Começar de graça</a>
    </div>
  </div>
</section>

<!-- PROBLEM -->
<section class="problem">
  <div class="wrap">
    <span class="eyebrow reveal">O verdadeiro adversário</span>
    <p class="problem-quote reveal">Você já sabe o que fazer.<br>O difícil é <span class="strike">fazer</span> quando há dinheiro na mesa.</p>
    <p class="reveal">Sob pressão, o medo faz você sair cedo, a ganância faz você dobrar a aposta, e a revanche faz você furar o próprio stop. Não é falta de conhecimento — é a emoção falando mais alto que o plano. O Prumo resolve exatamente isso.</p>
  </div>
</section>

<!-- SOLUTION -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow reveal">O que o Prumo faz</span>
      <h2 class="reveal">Três coisas que a sua cabeça, sozinha, não consegue garantir.</h2>
    </div>
    <div class="cards">
      <div class="card reveal">
        <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B65A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg></div>
        <span class="lbl">Sem emoção</span>
        <h3>Não tem medo nem ganância</h3>
        <p>O Prumo executa o plano sempre igual. Não hesita, não se empolga, não tenta "recuperar" no susto.</p>
      </div>
      <div class="card reveal">
        <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B65A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>
        <span class="lbl">No automático</span>
        <h3>Opera 24/7 por você</h3>
        <p>Você define a estratégia e os limites. O Prumo trabalha no mercado cripto sem você precisar ficar colado na tela.</p>
      </div>
      <div class="card reveal">
        <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B65A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <span class="lbl">Risco sob controle</span>
        <h3>Respeita os limites à risca</h3>
        <p>Limite de perda e regras de proteção são obedecidos sem exceção. O robô não "abre uma exceção só hoje".</p>
      </div>
    </div>
  </div>
</section>

<!-- COMPARE -->
<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow reveal">No manual vs com o Prumo</span>
      <h2 class="reveal">A diferença entre operar no impulso e operar no plano.</h2>
    </div>
    <div class="compare-table reveal">
      <div class="crow head">
        <div class="cell rl"></div>
        <div class="cell manual">No manual (você sozinho)</div>
        <div class="cell prumo">Com o Prumo</div>
      </div>
      <div class="crow">
        <div class="cell rl">Velocidade</div>
        <div class="cell manual"><svg class="xi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg><div><span class="m-lab">No manual</span>Limitada pela sua reação humana.</div></div>
        <div class="cell prumo"><svg class="ci" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><span class="m-lab">Com o Prumo</span>Execução instantânea e automática.</div></div>
      </div>
      <div class="crow">
        <div class="cell rl">Emoção</div>
        <div class="cell manual"><svg class="xi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg><div><span class="m-lab">No manual</span>Movida por medo, ganância e revanche.</div></div>
        <div class="cell prumo"><svg class="ci" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><span class="m-lab">Com o Prumo</span>Guiada pelas regras que você definiu.</div></div>
      </div>
      <div class="crow">
        <div class="cell rl">Consistência</div>
        <div class="cell manual"><svg class="xi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg><div><span class="m-lab">No manual</span>Depende do seu humor e foco no dia.</div></div>
        <div class="cell prumo"><svg class="ci" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><span class="m-lab">Com o Prumo</span>Estável — segue o plano sempre igual.</div></div>
      </div>
      <div class="crow">
        <div class="cell rl">Disponibilidade</div>
        <div class="cell manual"><svg class="xi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg><div><span class="m-lab">No manual</span>Só quando você está na frente da tela.</div></div>
        <div class="cell prumo"><svg class="ci" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><span class="m-lab">Com o Prumo</span>Opera no mercado cripto 24 horas por dia.</div></div>
      </div>
      <div class="crow">
        <div class="cell rl">Disciplina de risco</div>
        <div class="cell manual"><svg class="xi" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg><div><span class="m-lab">No manual</span>Fácil furar o próprio stop no calor do momento.</div></div>
        <div class="cell prumo"><svg class="ci" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><span class="m-lab">Com o Prumo</span>Respeita o limite de perda sem exceção.</div></div>
      </div>
    </div>
  </div>
</section>

<!-- HOW -->
<section id="como">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow reveal">Como funciona</span>
      <h2 class="reveal">Simples de começar. Transparente do início ao fim.</h2>
      <p class="reveal">O Prumo opera na <strong>sua própria conta</strong>, com a sua chave de acesso. Seu dinheiro nunca sai do seu controle — o Prumo apenas executa as ordens da estratégia que você escolheu.</p>
    </div>
    <div class="cards">
      <div class="card reveal"><span class="lbl">01</span><h3>Conecte sua conta</h3><p>Você liga o Prumo à sua corretora pela sua própria chave de API.</p></div>
      <div class="card reveal"><span class="lbl">02</span><h3>Defina os limites</h3><p>Escolha a estratégia, a meta e o limite de perda que o robô vai respeitar.</p></div>
      <div class="card reveal"><span class="lbl">03</span><h3>O Prumo opera</h3><p>Ele executa no automático, sem emoção, dentro das regras que você deu.</p></div>
    </div>
  </div>
</section>

<!-- TRUST -->
<section class="trust">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow reveal">Por que confiar</span>
      <h2 class="reveal">Feito para durar — não para a próxima promessa milagrosa.</h2>
    </div>
    <div class="trust-grid">
      <div class="trust-item reveal"><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><h3>Vende método, não milagre</h3><p>O Prumo não promete lucro. Promete disciplina, automação e risco controlado — o que mantém o trader vivo no longo prazo.</p></div></div>
      <div class="trust-item reveal"><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><h3>Seu dinheiro, seu controle</h3><p>Opera na sua conta, com a sua chave. Nada de "deposite aqui que a gente cuida".</p></div></div>
      <div class="trust-item reveal"><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><h3>Transparência total</h3><p>Cada operação fica visível para você. Sem caixa-preta, sem "confia em mim".</p></div></div>
      <div class="trust-item reveal"><svg class="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><div><h3>Da mesma casa do Vortek</h3><p>Nasce da plataforma de disciplina e autoconhecimento no trading. Mesma filosofia, produtos irmãos.</p></div></div>
    </div>
    <div class="risk">
      <svg class="ri" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>
      <span>Operações no mercado financeiro e de criptomoedas envolvem risco de perda. O Prumo é uma ferramenta de automação e gestão de disciplina; não promete nem garante lucros. Resultados passados não garantem resultados futuros.</span>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section id="comecar" class="closing">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow reveal">Comece agora</span>
      <h2 class="reveal">Pronto para operar com disciplina?</h2>
      <p class="reveal">Crie sua conta, conecte sua corretora e deixe o Prumo seguir o plano — sem emoção, dentro dos seus limites.</p>
    </div>
    <div class="cta-card reveal">
      <div class="cta-final">
        <a href="#" class="btn btn-gold btn-lg" id="ctaStart">Criar minha conta</a>
        <a href="#como" class="btn btn-ghost btn-lg">Ver como funciona</a>
      </div>
      <p class="cta-small">Você no controle do início ao fim. O Prumo apenas executa.</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="brand" href="#top" aria-label="Prumo">
          <svg class="mark" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0C264"/><stop offset="100%" stop-color="#C7882B"/></linearGradient></defs>
            <rect x="6" y="6" width="68" height="68" rx="20" fill="url(#g2)"/>
            <rect x="26" y="32" width="28" height="22" rx="7" fill="none" stroke="#fff" stroke-width="4"/>
            <path d="M34 41 L34 46 M46 41 L46 46" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
            <line x1="22.5" y1="39" x2="22.5" y2="45" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="57.5" y1="39" x2="57.5" y2="45" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="40" y1="23" x2="40" y2="32" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="40" cy="21" r="3" fill="#fff"/>
          </svg>
          <span class="name"><b>P</b>rumo</span>
        </a>
        <p>Trading automatizado com disciplina. Opera por você, sem emoção, respeitando seus limites de risco.</p>
      </div>
      <div class="foot-links">
        <a href="#como">Como funciona</a>
        <a href="#comecar">Começar agora</a>
        <a href="#" id="vortekLink">Conheça o Vortek →</a>
        <a href="mailto:aribldev@gmail.com">aribldev@gmail.com</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© <span id="yr"></span> Prumo · por Aristenio Barros Leite</span>
      <span>O Prumo não promete nem garante lucros. Operar envolve risco.</span>
    </div>
  </div>
</footer>
`;

export default function Home() {
  useEffect(() => {
    // Ano corrente no rodapé
    const yr = document.getElementById("yr");
    if (yr) yr.textContent = String(new Date().getFullYear());

    // Link do Vortek (mantido exatamente como no original)
    const vortek = document.getElementById("vortekLink");
    if (vortek) vortek.setAttribute("href", "https://vortektrading.vercel.app");

    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
