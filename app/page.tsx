"use client";

import React, { useState } from "react";
import {
  Zap,
  Crosshair,
  ShieldCheck,
  Activity,
  Cpu,
  Flame,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Terminal,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; msg: string }>({
    type: "idle",
    msg: "",
  });

  const [activeTab, setActiveTab] = useState<"cavebot" | "target" | "security">("cavebot");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Registrando solicitação..." });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, discord }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erro no envio");

      setStatus({ type: "success", msg: data.message });
      setEmail("");
      setDiscord("");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Erro desconhecido";
      setStatus({ type: "error", msg: errorMsg });
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-surfaceBorder/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-black shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              ⚡
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              SiteBot
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-emerald-400 transition-colors">
              Módulos
            </a>
            <a href="#preview" className="hover:text-emerald-400 transition-colors">
              Demonstração
            </a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">
              Planos
            </a>
          </nav>

          <a
            href="#access"
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            Obter Acesso
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surfaceBorder bg-surface text-xs text-emerald-400 mb-8 shadow-inner">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold">PokéTibia SaaS Engine v2.0 • Zero Ban Rate</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl">
            A mais veloz automação de farm e up em{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              PokéTibia
            </span>
            .
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Targeting autônomo, rotação milimétrica de cooldowns, heall instantâneo e rotas de cavebot totalmente inteligentes sincronizadas na nuvem.
          </p>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            <div className="p-4 rounded-xl bg-surface/60 border border-surfaceBorder text-center">
              <div className="text-2xl font-black text-emerald-400">99.98%</div>
              <div className="text-xs text-slate-400 mt-1">Uptime em Farm 24/7</div>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-surfaceBorder text-center">
              <div className="text-2xl font-black text-cyan-400">&lt; 3ms</div>
              <div className="text-xs text-slate-400 mt-1">Tempo de Reação Auto-Heal</div>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-surfaceBorder text-center">
              <div className="text-2xl font-black text-indigo-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Simulação Humana</div>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-surfaceBorder text-center">
              <div className="text-2xl font-black text-fuchsia-400">+450k</div>
              <div className="text-xs text-slate-400 mt-1">Média de EXP/h adicional</div>
            </div>
          </div>

          {/* Lead Form */}
          <div id="access" className="mt-12 w-full max-w-md p-8 rounded-2xl bg-surface border border-surfaceBorder shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-[10px] font-bold tracking-wider uppercase text-white shadow-md">
              Acesso Antecipado
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Entrar na Fila VIP do SiteBot</h2>
            <p className="text-xs text-slate-400 mb-6">
              Insira seu e-mail e Discord para receber seu instalador e chave de testes gratuita.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-surfaceBorder text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Seu Discord (ex: usuario#0000)"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-surfaceBorder text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:opacity-90 font-bold text-sm text-white shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                {status.type === "loading" ? "Processando..." : "Garantir Vaga na Fila"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>

            {status.msg && (
              <div
                className={`mt-4 p-3 rounded-lg text-xs font-medium ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                }`}
              >
                {status.msg}
              </div>
            )}
          </div>
        </section>

        {/* Feature Tabs Preview */}
        <section id="preview" className="max-w-6xl mx-auto px-6 py-20 border-t border-surfaceBorder/60">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">Console de Alta Performance</h2>
            <p className="text-slate-400 mt-2 text-sm">Controle total sobre o comportamento de jogo sem tocar no cliente.</p>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab("cavebot")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "cavebot"
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-surface border border-surfaceBorder text-slate-400 hover:text-white"
              }`}
            >
              Cavebot & Mapas
            </button>
            <button
              onClick={() => setActiveTab("target")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "target"
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-surface border border-surfaceBorder text-slate-400 hover:text-white"
              }`}
            >
              Smart Targeting
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "security"
                  ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20"
                  : "bg-surface border border-surfaceBorder text-slate-400 hover:text-white"
              }`}
            >
              Anti-Ban & Heurística
            </button>
          </div>

          <div className="rounded-2xl bg-surface border border-surfaceBorder p-6 md:p-8 font-mono text-xs shadow-2xl">
            <div className="flex items-center gap-2 pb-4 border-b border-surfaceBorder text-slate-500">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" /> sitebot-core: daemon running
              </span>
            </div>

            {activeTab === "cavebot" && (
              <div className="pt-4 space-y-2 text-slate-300">
                <div className="text-emerald-400">&gt; cavebot: inicializando malha de waypoints na zona [Cerulean Cave]...</div>
                <div className="text-slate-400">[0.02s] Node 12 alcançado (X: 1042, Y: 890, Z: 7)</div>
                <div className="text-slate-400">[0.04s] Deteccao de obstaculo: porta fechada -&gt; aplicando uso de chave automatico</div>
                <div className="text-slate-400">[0.09s] Capacidade do inventario: 84% -&gt; rota de depot agendada para 95%</div>
                <div className="text-emerald-400 font-bold">&gt; Status: Rota percorrida com 0 ms de atraso.</div>
              </div>
            )}

            {activeTab === "target" && (
              <div className="pt-4 space-y-2 text-slate-300">
                <div className="text-indigo-400">&gt; target-engine: 4 alvos no campo de visao</div>
                <div className="text-slate-400">[Target] Alvo prioritario detectado: Shiny Gengar (Nivel 100)</div>
                <div className="text-amber-400">[Alert] Alarme sonoro disparado e Webhook Discord notificado</div>
                <div className="text-slate-400">[Combo] Executando sequencia: m1 -&gt; m3 -&gt; m7 (intervalo: 120ms humano)</div>
                <div className="text-indigo-400 font-bold">&gt; Alvo neutralizado com sucesso. Auto-loot coletado.</div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="pt-4 space-y-2 text-slate-300">
                <div className="text-fuchsia-400">&gt; security: modulo de humanizacao com variacao gaussiana ativo</div>
                <div className="text-slate-400">[Humanizer] Desvio aleatorio de cursor aplicado nos cliques (curva Bezier)</div>
                <div className="text-slate-400">[Sleep] Micro-pausas organicas entre turnos de batalha (60ms ~ 280ms)</div>
                <div className="text-emerald-400 font-bold">&gt; Integridade do client intacta. Zero alertas de bot.</div>
              </div>
            )}
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-emerald-500/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auto-Heal & Potion</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Recuperação imediata de vida e mana com suporte a poções customizadas, revives e troca de Pokémon quando o HP estiver crítico.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-indigo-500/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Targeting Seletivo</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Priorização configurável por lista de perigo, distância ou raridade. Ignora monstros fracos e foca nos de maior rendimento.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-fuchsia-500/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cloud Synced SaaS</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Salve suas rotas, combos e configurações na nuvem. Acesse o dashboard pelo navegador ou celular e monitore suas contas remotamente.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 border-t border-surfaceBorder/60">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Planos Acessíveis para seu Farm</h2>
            <p className="text-slate-400 mt-2 text-sm">Evolua seu time e ganhe tempo com total segurança.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface border border-surfaceBorder flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Diário / Teste</h3>
                <div className="mt-4 text-3xl font-extrabold text-white">R$ 9,90 <span className="text-xs text-slate-400 font-normal">/dia</span></div>
                <p className="text-xs text-slate-400 mt-2">Ideal para testar na sua hunt favorita sem compromisso.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1 Instância Simultânea</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cavebot Básico + Auto Heal</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Suporte pelo Discord</li>
                </ul>
              </div>
              <a href="#access" className="mt-8 block text-center py-2.5 rounded-xl border border-surfaceBorder hover:border-slate-500 font-semibold text-xs transition-colors">
                Experimentar
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-surface border-2 border-emerald-500 relative flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[11px] uppercase tracking-wider">
                Mais Popular
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Mensal Pro</h3>
                <div className="mt-4 text-3xl font-extrabold text-white">R$ 49,90 <span className="text-xs text-slate-400 font-normal">/mês</span></div>
                <p className="text-xs text-slate-400 mt-2">Para players que levam o up e o farm a sério 24 horas por dia.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Até 3 Contas Simultâneas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Rotas Avançadas & Alerta Shiny</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cloud Dashboard & Estatísticas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Atualizações Prioritárias</li>
                </ul>
              </div>
              <a href="#access" className="mt-8 block text-center py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-emerald-500/20">
                Assinar Pro
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-surfaceBorder flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Lifetime Master</h3>
                <div className="mt-4 text-3xl font-extrabold text-white">R$ 199,90 <span className="text-xs text-slate-400 font-normal">único</span></div>
                <p className="text-xs text-slate-400 mt-2">Acesso vitalício para revendedores e farms de larga escala.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Contas Ilimitadas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Canal VIP com os Desenvolvedores</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Acesso ao Editor de Scripts Lua</li>
                </ul>
              </div>
              <a href="#access" className="mt-8 block text-center py-2.5 rounded-xl border border-surfaceBorder hover:border-slate-500 font-semibold text-xs transition-colors">
                Garantir Vitalício
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-surfaceBorder/60 py-8 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>&copy; 2026 SiteBot. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-slate-300 transition-colors">Termos</a>
            <a href="#access" className="hover:text-slate-300 transition-colors">Privacidade</a>
            <a href="#access" className="hover:text-slate-300 transition-colors">Discord Oficial</a>
          </div>
        </div>
      </footer>
    </div>
  );
}