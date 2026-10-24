"use client";

import React, { useState } from "react";
import {
  Zap,
  Crosshair,
  Shield,
  Activity,
  Check,
  Sparkles,
  ArrowRight,
  Bell,
  MapPin,
  RefreshCw,
  Key,
  Layers,
  HelpCircle,
  Radio,
  ChevronDown,
  ChevronUp,
  Cpu,
  Lock,
  ExternalLink,
  Sliders,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"daily" | "monthly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"cavebot" | "target" | "heal">("cavebot");

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    msg: string;
  }>({
    type: "idle",
    msg: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Gerando sua solicitação de licença..." });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, discord, plan: selectedPlan }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Erro no envio");

      setStatus({
        type: "success",
        msg: `Solicitação confirmada para o Plano ${selectedPlan === "daily" ? "Diário" : "Mensal"}! Chave e instalador despachados para o seu Discord e e-mail.`,
      });
      setEmail("");
      setDiscord("");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Erro na solicitação";
      setStatus({ type: "error", msg: errorMsg });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07090e] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Skip to Main Content (A11y Skill: Keyboard Navigation) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-slate-950 focus:font-bold focus:rounded-md"
      >
        Pular para o conteúdo principal
      </a>

      {/* Top Banner Status */}
      <aside aria-label="Status do Sistema" className="bg-[#090d16] border-b border-slate-800/80 py-2 px-4 text-center text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="flex h-2.5 w-2.5 relative" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-slate-200">
            Engine v3.4.2 Atualizada: Suporte nativo a OTClient V8, Redemption e servidores customizados
          </span>
          <span className="hidden md:inline text-slate-600" aria-hidden="true">•</span>
          <span className="hidden md:inline text-emerald-400 font-mono font-bold">100% OPERACIONAL</span>
        </div>
      </aside>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#07090e]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1" aria-label="SiteBot Página Inicial">
            <div className="h-9 w-9 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform" aria-hidden="true">
              <Zap className="w-5 h-5 text-slate-950 fill-current" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">SITEBOT</span>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                PRO
              </span>
            </div>
          </a>

          <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#modulos" className="hover:text-emerald-400 transition-colors focus-visible:text-emerald-400">
              Módulos
            </a>
            <a href="#telemetria" className="hover:text-emerald-400 transition-colors focus-visible:text-emerald-400">
              Telemetria ao Vivo
            </a>
            <a href="#planos" className="hover:text-emerald-400 transition-colors focus-visible:text-emerald-400">
              Planos
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors focus-visible:text-emerald-400">
              Perguntas
            </a>
          </nav>

          <a
            href="#planos"
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-2"
          >
            <Key className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Adquirir Licença</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section aria-labelledby="hero-title" className="relative overflow-hidden pt-20 pb-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-xs font-semibold text-emerald-400 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Automação Inteligente de Alta Precisão para PokéTibia</span>
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.12]">
              Evolua seu Farm e Nível com{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Segurança e Performance
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Targeting autônomo, rotação milimétrica de magias m1 a m12 sem perda de cooldown, cavebot adaptativo com troca de andares e notificação imediata de monstros Shiny no seu celular.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#planos"
                className="min-h-[48px] px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center gap-2"
              >
                <span>Garantir Licença Agora</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#modulos"
                className="min-h-[48px] px-8 py-3.5 rounded-xl bg-[#0e1422] border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm transition-all flex items-center gap-2"
              >
                <span>Explorar Recursos</span>
              </a>
            </div>

            {/* Live Interactive Telemetry HUD */}
            <div
              id="telemetria"
              aria-label="Painel de Telemetria e Monitoramento do Bot"
              className="mt-16 w-full max-w-4xl rounded-2xl bg-[#0c111d] border border-slate-800 shadow-2xl p-5 sm:p-6 text-left"
            >
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" aria-hidden="true" />
                    <span>SESSÃO ATIVA: <strong>Char_Master [Level 142]</strong></span>
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-slate-300">EXP/h: <strong className="text-emerald-400">+540.200</strong></span>
                  <span className="text-slate-300">Tempo Ativo: <strong className="text-white">05h 12m</strong></span>
                </div>
              </div>

              {/* Tab Selector */}
              <div role="tablist" aria-label="Abas de Telemetria" className="flex gap-2 mt-4 border-b border-slate-800 pb-3">
                <button
                  role="tab"
                  aria-selected={activeTab === "cavebot"}
                  onClick={() => setActiveTab("cavebot")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === "cavebot"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Cavebot & Waypoints
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "target"}
                  onClick={() => setActiveTab("target")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === "target"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Targeting & Spells
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "heal"}
                  onClick={() => setActiveTab("heal")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === "heal"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Auto-Heal & Suprimentos
                </button>
              </div>

              {/* Interactive Telemetry Body */}
              <div className="mt-4 p-4 rounded-xl bg-[#080d16] border border-slate-800 text-xs font-mono space-y-2">
                {activeTab === "cavebot" && (
                  <div>
                    <div className="text-emerald-400 font-bold mb-1">[ROTA ATIVA: Outland Ghost - Andar -2]</div>
                    <div className="text-slate-300">✔ WP #12: Escada detectada -&gt; Subida concluída sem delay</div>
                    <div className="text-slate-300">✔ WP #13: Buraco com Rope -&gt; Uso de corda automático em 12ms</div>
                    <div className="text-slate-300">✔ WP #14: Lure de 4 alvos e posicionamento seguro</div>
                    <div className="text-emerald-400 font-semibold">Status: Anti-Stuck ativo | Sem falhas de navegação</div>
                  </div>
                )}

                {activeTab === "target" && (
                  <div>
                    <div className="text-indigo-400 font-bold mb-1">[ROTADOR DE SKILLS & TARGET PRIORITÁRIO]</div>
                    <div className="text-slate-300">🎯 Alvo primário: Shiny Gengar (HP: 100% -&gt; 0% em 3.2s)</div>
                    <div className="text-slate-300">⚡ Rotação de spells executada: m1 -&gt; m3 -&gt; m6 (Sem travamento de GCD)</div>
                    <div className="text-amber-400">🔔 Alarme Shiny disparado e Webhook enviado ao Discord</div>
                    <div className="text-emerald-400 font-semibold">Status: Loot recolhido e monstro guardado na bag</div>
                  </div>
                )}

                {activeTab === "heal" && (
                  <div>
                    <div className="text-cyan-400 font-bold mb-1">[AUTO-HEAL & TROCA EMERGENCIAL]</div>
                    <div className="text-slate-300">💚 Pokémon Ativo: Mega Alakazam (HP: 100% | 14.200 / 14.200)</div>
                    <div className="text-slate-300">🧪 Auto Medicine: Gatilho ativo para HP &lt; 70% (Tempo de resposta: 2ms)</div>
                    <div className="text-slate-300">🔄 Troca de Pokéball: Slot 2 pronto caso HP atinja estado crítico (&lt; 20%)</div>
                    <div className="text-emerald-400 font-semibold">Status: Suprimentos monitorados (94x Great Potions restantes)</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section id="modulos" aria-labelledby="modulos-title" className="py-20 px-6 border-t border-slate-800 bg-[#06080d]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 id="modulos-title" className="text-3xl sm:text-4xl font-black text-white">
                Módulos de Automação Profissional
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Desenvolvido com foco em velocidade, estabilidade contínua e comportamento imperceptível aos sistemas de detecção.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5" aria-hidden="true">
                    <Crosshair className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Smart Target & Combos</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Priorização por distância ou lista de perigo. Rotação sequencial de magias respeitando o tempo de animação de cada habilidade.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400 font-semibold">
                  ✔ Suporte a m1 até m12
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5" aria-hidden="true">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Cavebot Multi-Andar</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Subida e descida de andares, uso inteligente de cordas, escadas e teleports. Sistema de rota reserva caso haja bloqueio no mapa.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-indigo-400 font-semibold">
                  ✔ Algoritmo anti-stuck nativo
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5" aria-hidden="true">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Auto-Healer Instantâneo</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Leitura de memória direta para resposta ultra rápida. Uso de remédios e poções e troca preventiva de Pokémon antes do desmaio.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-teal-400 font-semibold">
                  ✔ Tempo de reação inferior a 3ms
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5" aria-hidden="true">
                    <Bell className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Radar Shiny & Alarme</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Alerta sonoro na tela no momento do spawn de monstro raro e notificação via Webhook com print diretamente no Discord do seu smartphone.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-amber-400 font-semibold">
                  ✔ Integração com Discord Webhook
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-rose-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-5" aria-hidden="true">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Loot com Filtro de Itens</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Abertura imediata de corpos após o combate. Guarda Stones, Held Items, Revives e moedas na bag, ignorando itens sem valor.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-rose-400 font-semibold">
                  ✔ Filtro customizável por ID e nome
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5" aria-hidden="true">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Humanizer & Anti-Trap</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Cliques com variação de delay e curvas não-lineares simulando a mão do jogador. Detecta bloqueio por outros personagens e contorna.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-400 font-semibold">
                  ✔ Variação gaussiana de cliques
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section (Strictly Two Plans) */}
        <section id="planos" aria-labelledby="planos-title" className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                Transparência e Acesso Imediato
              </span>
              <h2 id="planos-title" className="text-3xl sm:text-5xl font-black text-white">
                Planos de Licença
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Sem assinaturas ocultas. Teste primeiro e migre para o mensal quando comprovar o rendimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* PLANO 1: Teste Diário */}
              <div
                role="button"
                tabIndex={0}
                aria-pressed={selectedPlan === "daily"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedPlan("daily");
                }}
                onClick={() => setSelectedPlan("daily")}
                className={`cursor-pointer rounded-2xl p-8 bg-[#0c111d] border-2 transition-all flex flex-col justify-between relative ${
                  selectedPlan === "daily"
                    ? "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Plano Teste Diário</h3>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600 flex items-center justify-center">
                      {selectedPlan === "daily" && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Acesso completo por 24 horas para testar na sua hunt favorita sem compromisso.
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">R$ 9,90</span>
                    <span className="text-xs text-slate-400 font-semibold">/ 24 Horas</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-xs text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Todos os módulos liberados sem restrição</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>1 Conexão simultânea</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Smart Target e Cavebot ativos</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Envio imediato da chave após confirmação</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <span className="text-center block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {selectedPlan === "daily" ? "✔ Plano Selecionado" : "Clique para Escolher"}
                  </span>
                </div>
              </div>

              {/* PLANO 2: Mensal Pro */}
              <div
                role="button"
                tabIndex={0}
                aria-pressed={selectedPlan === "monthly"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedPlan("monthly");
                }}
                onClick={() => setSelectedPlan("monthly")}
                className={`cursor-pointer rounded-2xl p-8 bg-[#0c111d] border-2 transition-all flex flex-col justify-between relative ${
                  selectedPlan === "monthly"
                    ? "border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.25)]"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
                  Mais Escolhido
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Plano Mensal Pro</h3>
                    <div className="w-5 h-5 rounded-full border-2 border-slate-600 flex items-center justify-center">
                      {selectedPlan === "monthly" && <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Acesso contínuo durante 30 dias com atualizações frequentes e suporte dedicado.
                  </p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">R$ 49,90</span>
                    <span className="text-xs text-slate-400 font-semibold">/ 30 Dias</span>
                  </div>

                  <ul className="mt-8 space-y-3 text-xs text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Até 3 Clientes executando simultaneamente</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Radar Shiny com alarme sonoro e Discord Webhook</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Rotas prontas da comunidade e editor de waypoints</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Suporte VIP prioritário diretamente no Discord</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                      <span>Atualizações automáticas da engine</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <span className="text-center block text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {selectedPlan === "monthly" ? "✔ Plano Selecionado" : "Clique para Escolher"}
                  </span>
                </div>
              </div>
            </div>

            {/* Accessible Lead / Order Form */}
            <div className="mt-12 max-w-xl mx-auto p-8 rounded-2xl bg-[#090d16] border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white text-center">
                Solicitar Chave de Acesso: {selectedPlan === "daily" ? "Plano Diário (R$ 9,90)" : "Plano Mensal (R$ 49,90)"}
              </h3>
              <p className="text-xs text-slate-400 text-center mt-1 mb-6">
                Preencha seus dados para receber o instalador seguro e sua chave de ativação.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="user-email" className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Seu E-mail Principal <span className="text-emerald-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    placeholder="exemplo@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                    className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-[#0c111d] border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user-discord" className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Seu Discord <span className="text-emerald-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="user-discord"
                    type="text"
                    placeholder="usuario_discord (ou nome completo)"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    required
                    aria-required="true"
                    className="w-full min-h-[44px] px-4 py-3 rounded-xl bg-[#0c111d] border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="mt-2 min-h-[48px] w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-sm text-slate-950 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  {status.type === "loading" ? "Gerando Licença..." : `Confirmar ${selectedPlan === "daily" ? "Plano Diário" : "Plano Mensal"}`}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>

              {status.msg && (
                <div
                  role="alert"
                  className={`mt-4 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> : null}
                  <span>{status.msg}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section (Progressive Disclosure & Accordion) */}
        <section id="faq" aria-labelledby="faq-title" className="py-20 px-6 border-t border-slate-800 bg-[#06080d]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="faq-title" className="text-3xl font-black text-white">
                Perguntas Frequentes
              </h2>
              <p className="mt-2 text-xs text-slate-400">
                Informações claras sobre segurança, entrega e compatibilidade técnica.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "Como o bot opera sem risco de travamentos?",
                  a: "O SiteBot utiliza comunicação assíncrona desacoplada da thread gráfica do jogo. As rotas e ações são calculadas em segundo plano, evitando queda de FPS ou interrupções no cliente.",
                },
                {
                  q: "Posso utilizar no meu servidor favorito de PokéTibia?",
                  a: "Sim. O software possui algoritmos adaptativos capazes de se ajustar a diferentes layouts de tela, versões do OTClient (V8, Redemption) e clients proprietários.",
                },
                {
                  q: "Como recebo minha chave após a solicitação?",
                  a: "O envio ocorre de forma imediata e automatizada para o seu Discord e e-mail informados, com guia rápido em texto e link para download seguro do instalador.",
                },
                {
                  q: "É possível migrar a licença para outro computador?",
                  a: "Sim. O reset de hardware (HWID) pode ser realizado de forma autônoma através dos comandos do bot no Discord sem necessidade de aguardar suporte humano.",
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl bg-[#0c111d] border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    <span>{item.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Accessible Footer */}
      <footer className="border-t border-slate-800 py-8 bg-[#04060a] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">SITEBOT SAAS</span>
            <span>&copy; 2026. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6">
            <a href="#modulos" className="hover:text-slate-300 transition-colors">Módulos</a>
            <a href="#planos" className="hover:text-slate-300 transition-colors">Planos</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Perguntas</a>
          </div>
        </div>
      </footer>
    </div>
  );
}