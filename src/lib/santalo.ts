import foto3 from "@/assets/foto3.jpg.asset.json";
import foto4 from "@/assets/foto4.png.asset.json";
import foto5 from "@/assets/foto5.png.asset.json";
import foto6 from "@/assets/foto6.png.asset.json";
import foto7 from "@/assets/foto7.png.asset.json";
import foto8 from "@/assets/foto8.png.asset.json";
import foto9 from "@/assets/foto9.webp.asset.json";
import foto10 from "@/assets/foto10.webp.asset.json";
import foto11 from "@/assets/foto11.png.asset.json";
import foto12 from "@/assets/foto12.png.asset.json";
import foto13 from "@/assets/foto13.png.asset.json";
import foto14 from "@/assets/foto14.png.asset.json";
import foto15 from "@/assets/foto15.png.asset.json";
import foto16 from "@/assets/foto16.jpg.asset.json";
import foto17 from "@/assets/foto17.jpg.asset.json";
import foto18 from "@/assets/foto18.jpg.asset.json";
import foto19 from "@/assets/foto19.jpg.asset.json";
import foto20 from "@/assets/foto20.jpg.asset.json";

export const photos = {
  casal: foto3.url,
  integrado: foto4.url,
  dormitorio: foto5.url,
  estar: foto6.url,
  cozinha: foto7.url,
  painel: foto8.url,
  detalhe: foto9.url,
  comercial: foto10.url,
  fachada: foto11.url,
  cozinhaIlha: foto12.url,
  painelJardim: foto13.url,
  lavabo: foto14.url,
  penteadeira: foto15.url,
  detalhePenteadeira: foto16.url,
  cozinhaAzul: foto17.url,
  detalheEstante: foto18.url,
  salaRipado: foto19.url,
  jantarIntegrado: foto20.url,
};

const wa = (text: string) =>
  `https://wa.me/5547999372334?text=${encodeURIComponent(text)}`;

export const whatsapp = {
  geral: wa(
    "Olá, Santalo. Quero conversar sobre um projeto de móveis sob medida. Posso enviar as medidas e algumas referências?",
  ),
  projetos: wa(
    "Olá, Santalo. Vi os projetos no site e quero conversar sobre um ambiente sob medida. Posso explicar o que tenho em mente?",
  ),
  arquitetos: wa(
    "Olá, Santalo. Sou arquiteto(a) e gostaria de conversar sobre a execução de um projeto de móveis sob medida.",
  ),
};

export const instagramUrl = "https://www.instagram.com/santalomoveis";
