// ====== GERAÇÃO DINÂMICA DOS LIVROS ======
const livrosData = [
  {id: "hora-estrela", titulo: "A Hora da Estrela", autor: "Clarice Lispector", genero: "ficcao classico", capa: "capa-hora-estrela.jpg"},
  {id: "a-malnascida", titulo: "A Malnascida", autor: "Beatrice Salvioni", genero: "ficcao", capa: "capa-a-malnascida.jpg"},
  {id: "o-uivo", titulo: "O Uivo e Outros Poemas", autor: "Allen Ginsberg", genero: "poesia ensaios", capa: "capa-o-uivo.jpg"},
  {id: "do-que-e-feito-uma-garota", titulo: "Do Que é Feito Uma Garota", autor: "Caitlin Moran", genero: "ficcao", capa: "capa-do-que-e-feito-uma-garota.jpg"},
  {id: "zaratustra", titulo: "Assim Falou Zaratustra", autor: "Friedrich Nietzsche", genero: "filosofia classico", capa: "capa-zaratustra.webp"},
  {id: "pe-na-estrada", titulo: "Pé na Estrada", autor: "Jack Kerouac", genero: "ficcao classico", capa: "capa-pe-na-estrada.jpg"},
  {id: "a-pedra-filosofal", titulo: "A Pedra Filosofal", autor: "J. K. Rowling", genero: "ficcao", capa: "capa-a-pedra-filosofal.jpg"},
  {id: "prazeres-perigosos", titulo: "Prazeres Perigosos", autor: "Anne Rice", genero: "ficcao erotico", capa: "prazeres-perigosos.jpg"},
  {id: "almoco-nu", titulo: "Almoço Nu", autor: "William Burroughs", genero: "ficcao", capa: "almoço-nu.webp"},
  {id: "rei-arthur", titulo: "Rei Arthur e os Cavaleiros da Távola Redonda", autor: "Thomas Malory", genero: "classico mitologia", capa: "capa-rei-arthur.webp"},
  {id: "bob-dylan", titulo: "Bob Dylan: Letras", autor: "Bob Dylan", genero: "biografico poesia", capa: "capa-bob-dylan.jpg"},
  {id: "a-vegetariana", titulo: "A Vegetariana", autor: "Han Kang", genero: "ficcao", capa: "capa-a-vegetariana.jpg"},
  {id: "walden", titulo: "Walden ou A Vida nos Bosques", autor: "Henry David Thoreau", genero: "filosofia ensaios", capa: "capa-walden.jpg"},
  {id: "venus-peles", titulo: "A Vênus das Peles", autor: "Sacher-Masoch", genero: "ficcao filosofia", capa: "capa-venus-peles.webp"},
  {id: "os-lusiadas", titulo: "Os Lusíadas", autor: "Luís de Camões", genero: "classico poesia", capa: "capa-os-lusiadas.webp"},
  {id: "casamento-ceu-inverno", titulo: "O Casamento do Céu e do Inverno", autor: "William Blake", genero: "poesia filosofia", capa: "capa-casamento-ceu-inverno.webp"},
  {id: "big-sur", titulo: "Big Sur", autor: "Jack Kerouac", genero: "ficcao", capa: "capa-big-sur.jpg"},
  {id: "folhas-relvas", titulo: "Folhas e Relvas", autor: "Walt Whitman", genero: "poesia", capa: "capa-folhas-relvas.jpg"},
  {id: "a-estrada", titulo: "A Estrada", autor: "Jack Londom", genero: "ficcao", capa: "capa-a-estrada.webp"},
  {id: "por-que-criancas-matam", titulo: "Por Que Crianças Matam", autor: "Kathryn Seifert", genero: "ensaios historia", capa: "capa-por-que-criancas-matam.webp"},
  {id: "noites-brancas", titulo: "Noites Brancas", autor: "Fiódor Dostoiévski", genero: "classico ficcao", capa: "capa-noites-brancas.webp"},
  {id: "matrimonio-ceu-inferno", titulo: "Matrimônio do Céu e do Inferno", autor: "William Blake", genero: "poesia filosofia", capa: "capa-matrimonio-ceu-inferno.jpg"},
  {id: "o-alquimista", titulo: "O Alquimista", autor: "Paulo Coelho", genero: "ficcao filosofia", capa: "capa-o-alquimista.jpg"},
  {id: "bukowski-essencial", titulo: "Bukowski Essencial: Poesia", autor: "Charles Bukowski", genero: "poesia", capa: "capa-bukowski-essencial.webp"},
  {id: "o-estrangeiro", titulo: "O Estrangeiro", autor: "Albert Camus", genero: "filosofia ficcao", capa: "capa-o-estrangeiro.jpeg"},
  {id: "retrato-dorian", titulo: "O Retrato de Dorian Gray", autor: "Oscar Wilde", genero: "ficcao classico", capa: "capa-dorian-gray.webp"},
  {id: "wicca-para-iniciantes", titulo: "Wicca para Iniciantes", autor: "Thea Sabin", genero: "esoterico", capa: "capa-wicca.webp"},
  {id: "astrologia-oculta", titulo: "Astrologia Oculto no Livro Vermelho", autor: "Carl Jung (interpretação esotérica)", genero: "esoterico filosofia", capa: "capa-astrologia-oculta.webp"},
  {id: "enterrem-coracao", titulo: "Enterrem Meu Coração na Curva do Rio", autor: "Dee Brown", genero: "historia ensaios", capa: "capa-enterrem-coracao.jpg"},
  {id: "tristessa", titulo: "Tristessa", autor: "Jack Kerouac", genero: "ficcao poesia", capa: "capa-tristessa.jpg"},
    
  {id: "como-eu-era-antes", titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes", genero: "ficcao romance", capa: "capa-como-eu-era-antes.jpg"},
  {id: "crime-castigo", titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", genero: "classico ficcao filosofia", capa: "capa-crime-castigo.jpg"},
  {id: "cronicas-japao", titulo: "Crônicas do Japão", autor: "Príncipe Toneri e Ō-no-Yassumaro", genero: "historia classico", capa: "capa-cronicas-japao.jpg"},
  {id: "culpa-estrelas", titulo: "A Culpa É das Estrelas", autor: "John Green", genero: "ficcao romance", capa: "capa-culpa-estrelas.png"},
  {id: "dom-casmurro", titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "classico ficcao", capa: "capa-dom-casmurro.webp"},
  {id: "dracula", titulo: "Drácula", autor: "Bram Stoker", genero: "terror classico", capa: "capa-dracula.webp"},
  {id: "antologia-poetica", titulo: "Antologia Poética", autor: "Fernando Pessoa", genero: "poesia classico", capa: "capa-antologia-poetica.webp"},
  {id: "velhice-saudavel", titulo: "Velhice Saudável", autor: "Raimunda Silva d'Alencar e Márcia Valéria Diederiche (orgs.)", genero: "ensaios", capa: "capa-velhice-saudavel.webp"},
  {id: "it-a-coisa", titulo: "It – A Coisa", autor: "Stephen King", genero: "terror ficcao", capa: "capa-it-a-coisa.jpeg"},
  {id: "rosa-do-povo", titulo: "A Rosa do Povo", autor: "Carlos Drummond de Andrade", genero: "poesia classico", capa: "capa-rosa-do-povo.webp"},
  {id: "historia-americas", titulo: "História das Américas", autor: "Diversos", genero: "historia", capa: "capa-historia-americas.jpg"},
  {id: "inferno-divina-comedia", titulo: "Inferno (A Divina Comédia)", autor: "Dante Alighieri", genero: "classico filosofia poesia", capa: "capa-inferno.jpeg"},
  {id: "iracema", titulo: "Iracema", autor: "José de Alencar", genero: "classico ficcao", capa: "capa-iracema.jpg"},
  {id: "liberdade-ser-mulher", titulo: "Liberdade de Ser Mulher", autor: "Diversas Autoras", genero: "ensaios feminismo", capa: "capa-liberdade-ser-mulher.jpg"},
  {id: "metamorfose", titulo: "A Metamorfose", autor: "Franz Kafka", genero: "ficcao classico filosofia", capa: "capa-metamorfose.jpeg"},
  {id: "odisseia", titulo: "Odisseia", autor: "Homero", genero: "classico mitologia", capa: "capa-odisseia.webp"},
  {id: "o-espelho", titulo: "O Espelho", autor: "Machado de Assis", genero: "classico filosofia", capa: "capa-o-espelho.jpg"},
  {id: "herdeiros-nietzsche", titulo: "Os Herdeiros de Nietzsche", autor: "Foucault, Agamben e Deleuze", genero: "filosofia ensaios", capa: "capa-herdeiros-nietzsche.webp"},
  {id: "para-todos-garotos", titulo: "Para Todos os Garotos Que Já Amei", autor: "Jenny Han", genero: "ficcao romance", capa: "capa-para-todos-garotos.jpg"},
  {id: "peter-pan", titulo: "Peter Pan & Wendy", autor: "J. M. Barrie", genero: "ficcao classico", capa: "capa-peter-pan.webp"},
  {id: "quando-mulheres-atiram", titulo: "Quando as Mulheres Atiram", autor: "Diversas Autoras", genero: "ensaios feminismo", capa: "capa-quando-mulheres-atiram.webp"},
  {id: "reinações-narizinho", titulo: "Reinações de Narizinho", autor: "Monteiro Lobato", genero: "ficcao infantil classico", capa: "capa-reinacoes-narizinho.webp"},
  {id: "revolucao-bichos", titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "ficcao filosofia", capa: "capa-revolucao-bichos.jpg"},
  {id: "uma-lagrima-mulher", titulo: "Uma Lágrima de Mulher", autor: "Aluísio Azevedo", genero: "classico ficcao", capa: "capa-uma-lagrima-mulher.webp"},
  {id: "vidas-secas", titulo: "Vidas Secas", autor: "Graciliano Ramos", genero: "classico ficcao", capa: "capa-vidas-secas.webp"},
  {id: "vinte-mil-leguas", titulo: "Vinte Mil Léguas Submarinas", autor: "Júlio Verne", genero: "ficcao aventura classico", capa: "capa-vinte-mil-leguas.webp"},
  {id: "republica", titulo: "A República", autor: "Platão", genero: "filosofia classico", capa: "capa-republica.webp"},
  {id: "volta-ao-mundo", titulo: "A Volta ao Mundo em 80 Dias", autor: "Júlio Verne", genero: "ficcao aventura classico", capa: "capa-volta-ao-mundo.webp"},
  {id: "cartomante", titulo: "A Cartomante", autor: "Machado de Assis", genero: "classico ficcao", capa: "capa-cartomante.webp"},
  {id: "alice-maravilhas", titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", genero: "ficcao classico fantasia", capa: "capa-alice.jpeg"}

];

// Monta os blocos
const grade = document.getElementById("grade-livros");
livrosData.forEach(l => {
  const div = document.createElement("div");
  div.className = "livro";
  div.dataset.livro = l.id;
  div.dataset.genero = l.genero;
  div.innerHTML = `
    <img src="capas/${l.capa}" alt="${l.titulo}">
    <h3>${l.titulo}</h3>
    <p>${l.autor}</p>
  `;
  grade.appendChild(div);
});

// ====== FILTRO MULTIGÊNERO ======
const botoes = document.querySelectorAll('.filtro-generos button');
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    const genero = botao.dataset.genero;
    document.querySelectorAll('.livro').forEach(l => {
      if (genero === 'todos' || l.dataset.genero.includes(genero)) {
        l.style.display = 'block';
      } else {
        l.style.display = 'none';
      }
    });
  });
});

// ====== RESUMOS + ABERTURA DE PDF ======
const resumos = {
   "hora-estrela": "A Hora da Estrela, de Clarice Lispector, acompanha Macabéa, jovem nordestina no Rio, e explora identidade, invisibilidade e destino com linguagem lírica e aflita.",
  "a-malnascida": "A Malnascida traça retratos da experiência feminina negra, reafirmando memória, dor e resistência em prosa poética.",
  "o-uivo": "Coletânea de poesia intensa e pulsante, que mistura protesto, lírica e experimentação formal (ex.: textos ao estilo de Ginsberg).",
  "do-que-e-feito-uma-garota": "Reflexões sobre adolescência e formação identitária — contos e poemas que investigam o que constrói uma garota.",
  "zaratustra": "Assim Falou Zaratustra, de Nietzsche, é um tratado filosófico-poético sobre a morte de Deus, o além-do-homem e a reavaliação dos valores.",
  "pe-na-estrada": "Pé na Estrada (On the Road) é o clássico beat que celebra a busca por liberdade, viagens e experiências que moldam uma geração.",
  "a-pedra-filosofal": "Romance de fantasia/aventura que inicia uma série sobre magia, descoberta e amadurecimento (título popular entre jovens leitores).",
  "prazeres-perigosos": "Ensaios e contos que exploram os limites do desejo, moralidade e transgressão, com tom provocador.",
  "almoco-nu": "Almoço Nu (William S. Burroughs) é prosa cortante e caótica que destrói narrativas lineares e mergulha no submundo das dependências e alucinações.",
  "rei-arthur": "Coletânea de lendas arturianas: cavaleiros, honra, busca do Graal e episódios medievais recontados para leitores contemporâneos.",
  "bob-dylan": "Compilação das letras de Bob Dylan, mostrando a força poética de suas canções — política, amor, crítica social e misticismo.",
  "a-vegetariana": "A Vegetariana (Han Kang) trata de corpo, revolta e transformação, usando uma fábula sombria sobre recusa e autonomia.",
  "walden": "Walden (Thoreau) é um diário-ensaio sobre vida simples, contato com a natureza e crítica à sociedade industrial.",
  "venus-peles": "A Vênus das Peles investiga relações de poder e desejo, e cunhou o termo 'masoquismo' em debate sobre amor e dominação.",
  "os-lusiadas": "Os Lusíadas, de Camões, é a epopeia que celebra as navegações portuguesas e o espírito heróico do século XVI.",
  "casamento-ceu-inverno": "Obra lírica que mistura imagens apocalípticas e místicas — texto breve de tom visionário.",
  "big-sur": "Big Sur (Kerouac) é relato íntimo da derrota e angústia do autor após a fama — tensão entre liberdade e desilusão.",
  "folhas-relvas": "Coletânea de poemas/fragmentos sobre paisagem, memória e linguagem naturalista.",
  "a-estrada": "A Estrada (distinto de Kerouac) costuma ser título para narrativas de viagem ou ficção distópica — aqui entendida como obra de jornada humana.",
  "por-que-criancas-matam": "Estudo/relato investigativo sobre casos de violência juvenil, causas sociais e propostas de prevenção.",
  "noites-brancas": "Noites Brancas (Dostoiévski) é romance curto sobre sonho, amor não correspondido e a solidão urbana.",
  "matrimonio-ceu-inferno": "Matrimônio do Céu e do Inferno (Blake) reúne aforismos e imagens místicas que rompem com a razão iluminista.",
  "o-alquimista": "O Alquimista (Paulo Coelho) é fábula sobre a busca do destino pessoal, símbolos e linguagem inspiracional.",
  "bukowski-essencial": "Seleção poética de Bukowski: versos cruéis, diretos, sobre o cotidiano, a solidão e a boemia.",
  "o-estrangeiro": "O Estrangeiro (Camus) examina o absurdo e a alienação através de Meursault, um personagem indiferente à moral social.",
  "retrato-dorian": "O Retrato de Dorian Gray (Oscar Wilde) é fábula sobre beleza, corrupção moral e o duplo entre aparência e alma.",
  "wicca-para-iniciantes": "Guia introdutório às práticas da Wicca: rituais, calendário, ética e exercícios para iniciantes.",
  "astrologia-oculta": "Estudo/esotérico que cruza simbolismo astrológico com textos arquetípicos (interpretação livre do 'Livro Vermelho').",
  "enterrem-coracao": "Enterrem Meu Coração na Curva do Rio (Dee Brown) narra a tragédia das populações indígenas norte-americanas durante a expansão colonial.",
  "tristessa": "Tristessa (Hemingway) é relato lírico e triste sobre uma mulher mexicana e a decadência afetiva do narrador.",

 
  "como-eu-era-antes": "Louisa Clark, uma jovem simples, passa a cuidar de Will Traynor, um homem rico e tetraplégico. Aos poucos, a relação entre os dois transforma suas vidas, mostrando que o amor pode nascer nos lugares mais improváveis.",
  "crime-castigo": "Raskólnikov, um estudante pobre em São Petersburgo, comete um assassinato acreditando estar acima da moral comum. O livro acompanha sua culpa, redenção e confronto com a própria consciência.",
  "cronicas-japao": "Compilado por ordem imperial, o texto é um dos mais antigos registros históricos do Japão, narrando mitos, genealogias e eventos que marcaram a formação do país.",
  "culpa-estrelas": "Hazel e Gus, dois adolescentes com câncer, se apaixonam ao dividir o mesmo humor ácido e uma busca por sentido diante da finitude. Uma história sobre amor, perda e esperança.",
  "dom-casmurro": "Bentinho narra seu amor por Capitu e a dúvida que o atormenta: teria sido traído? Um dos maiores clássicos da literatura brasileira, explorando ciúme, memória e ambiguidade.",
  "dracula": "Jonathan Harker viaja à Transilvânia e descobre o conde Drácula, uma criatura imortal que busca espalhar o terror em Londres. Um marco do terror gótico e da literatura moderna.",
  "antologia-poetica": "Reúne o melhor da poesia de Fernando Pessoa e seus heterônimos — reflexões sobre identidade, tempo e existência em uma linguagem filosófica e musical.",
  "velhice-saudavel": "Coletânea de textos que discutem o envelhecimento sob perspectivas médicas, sociais e emocionais, incentivando uma vida ativa e consciente na terceira idade.",
  "it-a-coisa": "Na cidade de Derry, um grupo de amigos enfrenta uma entidade maligna que assume a forma de seus maiores medos — especialmente o palhaço Pennywise. Terror, amizade e trauma se misturam numa das obras mais intensas de Stephen King.",
  "rosa-do-povo": "Obra poética de Drummond que retrata o Brasil da Segunda Guerra e da ditadura Vargas, mesclando dor individual, crítica social e esperança coletiva.",
  "historia-americas": "Uma análise da formação política, social e econômica dos países do continente americano, com foco em processos coloniais e movimentos de independência.",
  "inferno-divina-comedia": "Primeira parte da 'Divina Comédia', de Dante, que narra sua jornada pelos nove círculos do inferno, simbolizando o caminho da alma através do pecado e da redenção.",
  "iracema": "Romance indianista de José de Alencar que narra o amor trágico entre a índia Iracema e o português Martim, simbolizando o nascimento do povo brasileiro.",
  "liberdade-ser-mulher": "Reunião de textos sobre empoderamento e autoconhecimento feminino, discutindo os desafios e conquistas das mulheres na sociedade contemporânea.",
  "metamorfose": "Gregor Samsa acorda transformado em um inseto gigante e vê sua vida desmoronar. Uma metáfora poderosa sobre alienação, isolamento e desumanização.",
  "odisseia": "Após a Guerra de Troia, Ulisses enfrenta uma longa e perigosa jornada de volta a Ítaca. Um dos maiores épicos da literatura ocidental, símbolo de astúcia e perseverança.",
  "o-espelho": "Um homem se depara com um enigma existencial ao observar sua imagem no espelho, refletindo sobre a dualidade entre o eu interior e o eu social.",
  "herdeiros-nietzsche": "Estudo filosófico sobre como Foucault, Agamben e Deleuze reinterpretaram Nietzsche, ampliando seu pensamento sobre poder, vida e subjetividade.",
  "para-todos-garotos": "Lara Jean escreve cartas secretas para seus amores, que acabam sendo enviadas sem querer. A partir disso, ela vive descobertas sobre amor e autenticidade.",
  "peter-pan": "A história do menino que não queria crescer e vive aventuras na Terra do Nunca, com Wendy e os Meninos Perdidos, explorando infância, liberdade e fantasia.",
  "quando-mulheres-atiram": "Coletânea de contos e ensaios que discutem o papel da mulher em contextos de resistência, violência e empoderamento.",
  "reinações-narizinho": "Obra infantil de Monteiro Lobato que apresenta o Sítio do Picapau Amarelo, com personagens marcantes como Emília e Narizinho, misturando imaginação e cultura brasileira.",
  "revolucao-bichos": "Em uma fazenda, os animais se rebelam contra os humanos e criam seu próprio governo. Alegoria poderosa sobre o totalitarismo e a corrupção do poder.",
  "uma-lagrima-mulher": "Romance de Aluísio Azevedo que retrata as contradições da mulher na sociedade do século XIX, entre sentimentos, moralidade e repressão.",
  "vidas-secas": "Família de retirantes luta contra a seca e a miséria no sertão nordestino. Obra-prima de Graciliano Ramos sobre sobrevivência e desumanização.",
  "vinte-mil-leguas": "O capitão Nemo comanda o submarino Náutilus em uma expedição épica pelos mares do mundo. Aventura, ciência e mistério no clássico de Júlio Verne.",
  "republica": "Diálogo filosófico em que Platão discute justiça, poder e a ideia do Estado ideal, propondo uma reflexão sobre ética e política.",
  "volta-ao-mundo": "Phileas Fogg aposta que pode dar a volta ao mundo em 80 dias. Aventura repleta de imprevistos, humor e engenhosidade.",
  "cartomante": "Um triângulo amoroso e o destino guiado por uma leitura de cartas. Machado de Assis questiona a sorte, o amor e a ironia da vida.",
  "alice-maravilhas": "Alice cai em um mundo mágico e absurdo, repleto de criaturas excêntricas. Uma fantasia filosófica sobre lógica, linguagem e imaginação."
};


  // adicione outros resumos se quiser

document.querySelectorAll('.livro, .lista-livros li').forEach(el => {
  el.addEventListener('click', e => {
    const id = el.dataset.livro;
    const resumoBox = document.getElementById("resumo-livro");
    resumoBox.innerHTML = `
      <h2>${livrosData.find(l => l.id === id)?.titulo}</h2>
      <p>${resumos[id] || "Resumo não disponível."}</p>
      <button class="btn-abrir-pdf" onclick="abrirPDF('${id}')">Abrir PDF</button>
    `;
  });
});

// Abre PDF
function abrirPDF(id) {
  const url = `pdfs/${id}.pdf`;
  window.open(url, '_blank');
}
// Função SAIR — fecha a janela
sairLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.close();
});
