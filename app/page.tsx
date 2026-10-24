"use client";

import React, { useState } from "react";
import {
  Zap,
  Crosshair,
  Shield,
  Activity,
  Flame,
  Check,
  Sparkles,
  ArrowRight,
  Bell,
  MapPin,
  Clock,
  Volume2,
  RefreshCw,
  Key,
  Layers,
  HelpCircle,
  Radio,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"daily" | "monthly">("monthly");
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; msg: string }>({
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
        msg: `Solicitação confirmada para o Plano ${selectedPlan === "daily" ? "Diário" : "Mensal"}! Verifique seu Discord em instantes.`,
      });
      setEmail("");
      setDiscord("");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Erro na solicitação";
      setStatus({ type: "error", msg: errorMsg });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07090e] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Top Banner Status */}
      <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900 to-indigo-950/70 border-b border-emerald-500/20 py-1.5 px-4 text-center text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Compatível com OTClient V8, Redemption e Servidores Customizados</span>
          <span className="hidden md:inline text-emerald-400/60">•</span>
          <span className="hidden md:inline text-emerald-400 font-semibold">Engine v3.4.2 Atualizada</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07090e]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-black shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              <Zap className="w-5 h-5 text-slate-950 fill-current" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">SITEBOT</span>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                PRO
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#modulos" className="hover:text-emerald-400 transition-colors">
              Módulos do Bot
            </a>
            <a href="#dashboard" className="hover:text-emerald-400 transition-colors">
              Painel em Tempo Real
            </a>
            <a href="#planos" className="hover:text-emerald-400 transition-colors">
              Planos & Valores
            </a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">
              Dúvidas Frequentes
            </a>
          </nav>

          <a
            href="#planos"
            className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] flex items-center gap-1.5"
          >
            <Key className="w-3.5 h-3.5" /> Adquirir Licença
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Automação Profissional de Alto Nível para PokéTibia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
            Evolua seu Farm e Nível com{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Precisão Milimétrica
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Software completo com targeting avançado, rotação perfeita de magias sem perda de cooldown, cavebot adaptativo com troca de andares e notificação imediata de Shinies no seu Discord.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#planos"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center gap-2"
            >
              Começar Teste Diário <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#modulos"
              className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-300 font-bold text-sm transition-all"
            >
              Ver Recursos Completos
            </a>
          </div>

          {/* Real-time HUD Preview */}
          <div id="dashboard" className="mt-16 w-full max-w-4xl rounded-2xl bg-[#0c111d] border border-slate-800 shadow-2xl p-4 sm:p-6 text-left">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-slate-800" />
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> SESSÃO ATIVA: Char_Hunter_01 [Level 142]
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-slate-400">EXP/h: <strong className="text-emerald-400 font-bold">+520.400</strong></span>
                <span className="text-slate-400">Tempo de Sessão: <strong className="text-white">04h 28m</strong></span>
              </div>
            </div>

            {/* Simulated Bot Interface */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1: Status do Personagem & Pokemon */}
              <div className="p-4 rounded-xl bg-[#080d16] border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" /> Pokémon Ativo
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Mega Alakazam</span>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Vida (HP)</span>
                    <span className="text-emerald-400 font-bold">14.200 / 14.200 (100%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                    <span>Energia / Mana</span>
                    <span className="text-cyan-400 font-bold">8.450 / 9.000 (93%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full w-[93%]" />
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Auto-Potion:</span>
                  <span className="text-emerald-400 font-semibold">Ativo (&gt; 65% HP)</span>
                </div>
              </div>

              {/* Box 2: Rotas de Cavebot & Waypoints */}
              <div className="p-4 rounded-xl bg-[#080d16] border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Rota Cavebot
                  </span>
                  <span className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Outland Ghost</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>WP #24: Escada - Subir</span>
                    <span className="text-emerald-400 font-semibold">Sucesso</span>
                  </div>
                  <div className="flex items-center justify-between text-indigo-300 bg-indigo-500/10 p-1 rounded">
                    <span>WP #25: Lure & Spell Combo</span>
                    <span className="animate-pulse font-bold">Em curso</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>WP #26: Coleta de Baú / Loot</span>
                    <span>Pendente</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Anti-Stuck:</span>
                  <span className="text-emerald-400 font-semibold">Ativo (Auto-Rope)</span>
                </div>
              </div>

              {/* Box 3: Radar & Shiny Alarm */}
              <div className="p-4 rounded-xl bg-[#080d16] border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-bold">
                    <Bell className="w-3.5 h-3.5 text-amber-400" /> Radar de Monstros
                  </span>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Alarme Ligado</span>
                </div>
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                  <div className="font-bold flex items-center gap-1">
                    <Volume2 className="w-3.5 h-3.5" /> Shiny Gengar Localizado!
                  </div>
                  <p className="mt-1 text-slate-400 text-[10px]">
                    Notificação enviada ao Discord com captura de tela automática.
                  </p>
                </div>
                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Cooldown Spells:</span>
                  <span className="text-emerald-400 font-mono font-bold">m1, m3, m4, m6 [OK]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules & Capabilities */}
      <section id="modulos" className="py-20 px-6 border-t border-slate-800/80 bg-[#06080d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Módulos de Engenharia Avançada</h2>
            <p className="mt-3 text-sm text-slate-400">
              Cada funcionalidade foi construída para operar como um jogador real, eliminando perdas de tempo e riscos de detecção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Target & Combo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prioriza alvos perigosos, executa a rotação de habilidades (m1 até m12) conforme a distância e aguarda o término das animações sem bloquear os movimentos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cavebot Multi-Andar</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Navegação suave em labirintos, uso automático de cordas, escadas, chaves e teleports. Sistema de rota de emergência para o Centro Pokémon caso acabe os recursos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-teal-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Healer de Alta Resposta</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Leitura de memória direta para resposta em milissegundos. Usa remédios e poções instantaneamente e executa troca imediata de monstro quando o HP atinge o limite seguro.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-amber-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Radar Shiny & Webhook</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Identificação sonora na tela de monstros raros ou Shinies. Notificação direta com foto no aplicativo do Discord do seu smartphone para você não perder nenhum drop.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Loot Inteligente</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Abre corpos instantaneamente após o abate, filtrando apenas itens valiosos como Stones, Revives, Held Items e moedas, descartando lixo para não lotar a mochila.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl bg-[#0b101b] border border-slate-800 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Anti-Trap & Humanizer</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Movimentos de mouse com curvas orgânicas de Bézier e intervalos variáveis entre comandos. Se outro player tentar travar o seu char, o bot identifica e contorna a rota.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - EXACTLY TWO PLANS */}
      <section id="planos" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              Acesso Sem Burocracia
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Escolha Seu Plano</h2>
            <p className="mt-3 text-sm text-slate-400">
              Disponibilizamos o teste diário para você validar a performance e o plano mensal para farm contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PLANO 1: Teste Diário */}
            <div
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
                  <div className="p-1 rounded-full border border-slate-700">
                    <div className={`w-3.5 h-3.5 rounded-full ${selectedPlan === "daily" ? "bg-emerald-500" : "bg-transparent"}`} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Perfeito para avaliar todas as ferramentas na sua hunt favorita durante 24 horas.
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">R$ 9,90</span>
                  <span className="text-xs text-slate-400 font-semibold">/ 24 Horas</span>
                </div>

                <div className="mt-8 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Acesso a todos os módulos sem restrição</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>1 Cliente ativo simultaneamente</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Smart Target e Auto-Potion liberados</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Entrega instantânea da chave após confirmação</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-center block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {selectedPlan === "daily" ? "Plano Selecionado" : "Clique para Selecionar"}
                </span>
              </div>
            </div>

            {/* PLANO 2: Mensal Pro */}
            <div
              onClick={() => setSelectedPlan("monthly")}
              className={`cursor-pointer rounded-2xl p-8 bg-[#0c111d] border-2 transition-all flex flex-col justify-between relative ${
                selectedPlan === "monthly"
                  ? "border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.25)]"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
                Recomendado
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Plano Mensal Pro</h3>
                  <div className="p-1 rounded-full border border-slate-700">
                    <div className={`w-3.5 h-3.5 rounded-full ${selectedPlan === "monthly" ? "bg-emerald-500" : "bg-transparent"}`} />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Solução completa para jogadores e revendedores que mantêm o farm 24/7 sem interrupções.
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">R$ 49,90</span>
                  <span className="text-xs text-slate-400 font-semibold">/ 30 Dias</span>
                </div>

                <div className="mt-8 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Até 3 Clientes executando simultaneamente</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Radar Shiny com alertas sonoros e webhook</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Rotas exclusivas da comunidade e criador de waypoints</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Suporte VIP prioritário diretamente no Discord</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Atualizações automáticas semanais da engine</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-center block text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {selectedPlan === "monthly" ? "Plano Selecionado" : "Clique para Selecionar"}
                </span>
              </div>
            </div>
          </div>

          {/* Form de Aquisição Direta */}
          <div className="mt-12 max-w-xl mx-auto p-8 rounded-2xl bg-[#090d16] border border-slate-800 shadow-xl">
            <h3 className="text-lg font-bold text-white text-center">
              Solicitar Chave: {selectedPlan === "daily" ? "Plano Diário (R$ 9,90)" : "Plano Mensal (R$ 49,90)"}
            </h3>
            <p className="text-xs text-slate-400 text-center mt-1 mb-6">
              Informe seu e-mail e Discord para receber as instruções e o link seguro de ativação.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Seu E-mail</label>
                <input
                  type="email"
                  placeholder="exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0c111d] border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Seu Discord</label>
                <input
                  type="text"
                  placeholder="usuario_discord (ou tag completa)"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0c111d] border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 font-bold text-sm text-slate-950 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                {status.type === "loading" ? "Gerando Licença..." : `Confirmar ${selectedPlan === "daily" ? "Plano Diário" : "Plano Mensal"}`}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {status.msg && (
              <div
                className={`mt-4 p-3.5 rounded-xl text-xs font-semibold ${
                  status.type === "success"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                }`}
              >
                {status.msg}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 border-t border-slate-800/80 bg-[#06080d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-white">Dúvidas Frequentes</h2>
            <p className="mt-2 text-xs text-slate-400">Respostas diretas sobre a instalação e segurança do software.</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#0c111d] border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400" /> O bot funciona em qualquer servidor de PokéTibia?
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed pl-6">
                Sim. A engine do SiteBot foi desenvolvida com compatibilidade universal para OTClient V8, Redemption e launchers customizados, adaptando a leitura dos pacotes e da interface do jogo.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0c111d] border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400" /> Como funciona a entrega após a confirmação?
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed pl-6">
                O envio da sua chave de licença e do instalador é automático no seu Discord e e-mail cadastrados. Em menos de 2 minutos você já pode colar a chave e iniciar o farm.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0c111d] border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400" /> Posso trocar de computador durante o período ativo?
              </h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed pl-6">
                Sim. Você pode desvincular seu hardware (HWID) através do bot no Discord e ativá-lo em outra máquina sem custos adicionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#04060a] text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">SITEBOT AUTOMATION</span>
            <span>&copy; 2026. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6">
            <a href="#modulos" className="hover:text-slate-300 transition-colors">Módulos</a>
            <a href="#planos" className="hover:text-slate-300 transition-colors">Planos</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}