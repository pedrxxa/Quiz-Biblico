let perguntas = [
  {
    pergunta: "Qual profeta viu uma visão de um vale de ossos secos?",
    opcoes: ["Isaías", "Jeremias", "Ezequiel", "Daniel", "Oséias"],
    correta: 2,
    versiculo: "Ezequiel 37:1-10",
    curiosidade: "Ezequiel teve essa visão como símbolo da restauração de Israel."
  },
  {
    pergunta: "Qual era o nome da esposa de Acabe, conhecida por sua perversidade?",
    opcoes: ["Atalia", "Dalila", "Jezabel", "Noemi", "Raquel"],
    correta: 2,
    versiculo: "1 Reis 21:25",
    curiosidade: "Jezabel incentivou o culto a Baal e perseguiu os profetas do Senhor."
  },
  {
    pergunta: "Quem escreveu o maior número de salmos?",
    opcoes: ["Asafe", "Salomão", "Moisés", "Davi", "Etã"],
    correta: 3,
    versiculo: "Salmos 73:1 (e outros)",
    curiosidade: "Davi é autor de cerca de 73 dos 150 salmos."
  },
  {
    pergunta: "Em qual livro encontramos a história de Rute?",
    opcoes: ["Juízes", "1 Samuel", "Rute", "Gênesis", "Êxodo"],
    correta: 2,
    versiculo: "Rute 1:1",
    curiosidade: "O livro de Rute destaca a fidelidade e redenção, e ela é ancestral de Davi."
  },
  {
    pergunta: "Quem sucedeu Moisés na liderança de Israel?",
    opcoes: ["Calebe", "Elias", "Josué", "Arão", "Gideão"],
    correta: 2,
    versiculo: "Deuteronômio 34:9",
    curiosidade: "Josué foi cheio do Espírito e conduziu o povo na conquista de Canaã."
  },
  {
    pergunta: "Quantos dias e noites choveu no dilúvio?",
    opcoes: ["7", "10", "20", "40", "70"],
    correta: 3,
    versiculo: "Gênesis 7:12",
    curiosidade: "Choveu por 40 dias e 40 noites, cobrindo toda a terra com água."
  },
  {
    pergunta: "Qual foi o primeiro milagre de Jesus?",
    opcoes: ["Curar um cego", "Andar sobre as águas", "Ressuscitar Lázaro", "Transformar água em vinho", "Multiplicar pães"],
    correta: 3,
    versiculo: "João 2:1-11",
    curiosidade: "Esse milagre aconteceu nas bodas de Caná, demonstrando sua glória."
  },
  {
    pergunta: "Qual era o nome do sumo sacerdote no julgamento de Jesus?",
    opcoes: ["Pilatos", "Anás", "Caifás", "Herodes", "Nicodemos"],
    correta: 2,
    versiculo: "Mateus 26:3",
    curiosidade: "Caifás foi o sumo sacerdote que conspirou para prender Jesus."
  },
  {
    pergunta: "Quem subiu ao céu num redemoinho de fogo?",
    opcoes: ["Moisés", "Elias", "Henoc", "Samuel", "Eliseu"],
    correta: 1,
    versiculo: "2 Reis 2:11",
    curiosidade: "Elias foi levado por um carro de fogo diante de Eliseu."
  },
  {
    pergunta: "Quem traiu Jesus por 30 moedas de prata?",
    opcoes: ["Pedro", "João", "Judas Iscariotes", "Tomé", "Bartolomeu"],
    correta: 2,
    versiculo: "Mateus 26:14-16",
    curiosidade: "Judas entregou Jesus aos líderes religiosos por 30 moedas, conforme profecia."
  },
    {
    pergunta: "Quantos capítulos tem o livro de Salmos?",
    opcoes: ["100", "119", "150", "121", "133"],
    correta: 2,
    versiculo: "Salmos 1:1",
    curiosidade: "Salmos é o maior livro da Bíblia, com 150 capítulos."
  },
  {
    pergunta: "Quem interpretou o sonho do Faraó no Egito?",
    opcoes: ["Daniel", "José", "Moisés", "Arão", "Jeremias"],
    correta: 1,
    versiculo: "Gênesis 41:15-16",
    curiosidade: "José disse que a interpretação vinha de Deus, não dele."
  },
  {
    pergunta: "Quem foi jogado na cova dos leões?",
    opcoes: ["Sadraque", "Elias", "Daniel", "Ezequiel", "Neemias"],
    correta: 2,
    versiculo: "Daniel 6:16",
    curiosidade: "Daniel não foi ferido, pois confiava em Deus."
  },
  {
    pergunta: "Qual apóstolo escreveu o Apocalipse?",
    opcoes: ["Paulo", "Pedro", "Tiago", "João", "Lucas"],
    correta: 3,
    versiculo: "Apocalipse 1:1",
    curiosidade: "João recebeu as visões na ilha de Patmos."
  },
  {
    pergunta: "Qual era o nome hebraico de Sadraque?",
    opcoes: ["Misael", "Azarias", "Ananias", "Abede-Nego", "Daniel"],
    correta: 2,
    versiculo: "Daniel 1:7",
    curiosidade: "Sadraque era o nome babilônico dado a Ananias."
  },
  {
    pergunta: "Qual mulher julgava Israel antes dos reis?",
    opcoes: ["Ester", "Rute", "Débora", "Miriam", "Ana"],
    correta: 2,
    versiculo: "Juízes 4:4",
    curiosidade: "Débora era profetisa e juíza, liderando com sabedoria."
  },
  {
    pergunta: "Qual discípulo andou sobre as águas com Jesus?",
    opcoes: ["João", "Pedro", "Tiago", "Tomé", "André"],
    correta: 1,
    versiculo: "Mateus 14:29",
    curiosidade: "Pedro andou, mas afundou por duvidar."
  },
  {
    pergunta: "Qual evangelho não é considerado sinótico?",
    opcoes: ["Mateus", "Marcos", "Lucas", "João", "Todos são"],
    correta: 3,
    versiculo: "João 1:1",
    curiosidade: "João tem estilo e foco distintos dos outros três."
  },
  {
    pergunta: "Quem era o rei mais sábio da Bíblia?",
    opcoes: ["Davi", "Salomão", "Saul", "Ezequias", "Josias"],
    correta: 1,
    versiculo: "1 Reis 4:29-30",
    curiosidade: "Salomão pediu sabedoria e recebeu também riquezas."
  },
  {
    pergunta: "Qual discípulo foi conhecido por duvidar da ressurreição?",
    opcoes: ["Pedro", "Judas Tadeu", "Tomé", "Filipe", "Natanael"],
    correta: 2,
    versiculo: "João 20:24-29",
    curiosidade: "Tomé creu após tocar nas feridas de Jesus."
  },
    {
    pergunta: "Qual dos evangelhos tem o maior número de capítulos?",
    opcoes: ["Mateus", "Marcos", "Lucas", "João", "Atos"],
    correta: 0,
    versiculo: "Mateus 28:1",
    curiosidade: "Mateus tem 28 capítulos, sendo o mais longo entre os evangelhos."
  },
  {
    pergunta: "Quem construiu o templo em Jerusalém?",
    opcoes: ["Davi", "Ezequias", "Salomão", "Neemias", "Zorobabel"],
    correta: 2,
    versiculo: "1 Reis 6:1",
    curiosidade: "Salomão construiu o primeiro templo, conforme plano de Deus."
  },
  {
    pergunta: "Quem era a mãe do profeta Samuel?",
    opcoes: ["Sara", "Miriã", "Ana", "Ester", "Raquel"],
    correta: 2,
    versiculo: "1 Samuel 1:20",
    curiosidade: "Ana orou intensamente a Deus e prometeu entregar Samuel ao Senhor."
  },
  {
    pergunta: "Qual o nome do servo de Abraão que buscou uma esposa para Isaque?",
    opcoes: ["Elias", "Eliezer", "Ló", "Zofar", "Ismael"],
    correta: 1,
    versiculo: "Gênesis 24:2",
    curiosidade: "Eliezer foi o servo fiel que encontrou Rebeca para Isaque."
  },
  {
    pergunta: "Qual apóstolo era cobrador de impostos?",
    opcoes: ["Tiago", "Judas", "Bartolomeu", "Mateus", "Simão"],
    correta: 3,
    versiculo: "Mateus 9:9",
    curiosidade: "Mateus era coletor de impostos antes de seguir Jesus."
  },
  {
    pergunta: "Qual discípulo escreveu dois livros: um evangelho e Atos?",
    opcoes: ["Pedro", "Lucas", "João", "Tiago", "Filipe"],
    correta: 1,
    versiculo: "Lucas 1:1-3",
    curiosidade: "Lucas, médico e companheiro de Paulo, escreveu ambos com grande precisão."
  },
  {
    pergunta: "Quem foi o homem mais paciente segundo a Bíblia?",
    opcoes: ["Moisés", "Abraão", "Jó", "Davi", "Jeremias"],
    correta: 2,
    versiculo: "Tiago 5:11",
    curiosidade: "Jó suportou grandes sofrimentos sem perder a fé em Deus."
  },
  {
    pergunta: "Quem foi levado ao céu sem experimentar a morte?",
    opcoes: ["Elias", "Moisés", "João Batista", "Henoc", "Paulo"],
    correta: 3,
    versiculo: "Gênesis 5:24",
    curiosidade: "Henoc andava com Deus e foi tomado por Ele — desapareceu da terra!"
  },
  {
    pergunta: "Quem desafiou os profetas de Baal no monte Carmelo?",
    opcoes: ["Moisés", "Elias", "Samuel", "Oséias", "Eliseu"],
    correta: 1,
    versiculo: "1 Reis 18:36-39",
    curiosidade: "Elias orou e fogo desceu do céu, consumindo o altar diante de todo o povo."
  },
  {
    pergunta: "Quem escreveu o Salmo 90?",
    opcoes: ["Davi", "Asafe", "Moisés", "Salomão", "Etã"],
    correta: 2,
    versiculo: "Salmos 90:1",
    curiosidade: "Este salmo é uma oração de Moisés, mostrando a brevidade da vida humana."
  },
    {
    pergunta: "Qual foi a última praga enviada ao Egito?",
    opcoes: ["Rãs", "Gafanhotos", "Escuridão", "Chuva de fogo", "Morte dos primogênitos"],
    correta: 4,
    versiculo: "Êxodo 12:29",
    curiosidade: "Deus feriu os primogênitos do Egito, inclusive do Faraó."
  },
  {
    pergunta: "Qual foi a esposa que riu ao ouvir que teria um filho na velhice?",
    opcoes: ["Rebeca", "Ana", "Miriã", "Sara", "Raquel"],
    correta: 3,
    versiculo: "Gênesis 18:12",
    curiosidade: "Sara riu em seu coração, mas Deus cumpriu a promessa com Isaque."
  },
  {
    pergunta: "Qual rei escreveu boa parte dos Provérbios?",
    opcoes: ["Salomão", "Ezequias", "Josias", "Davi", "Jeroboão"],
    correta: 0,
    versiculo: "Provérbios 1:1",
    curiosidade: "Salomão é considerado o autor de grande parte do livro de Provérbios."
  },
  {
    pergunta: "Quem foi o profeta que confrontou Davi após seu pecado com Bate-Seba?",
    opcoes: ["Isaías", "Samuel", "Elias", "Natã", "Gade"],
    correta: 3,
    versiculo: "2 Samuel 12:7",
    curiosidade: "Natã usou uma parábola para fazer Davi reconhecer seu pecado."
  },
  {
    pergunta: "Qual foi o discípulo que negou Jesus três vezes?",
    opcoes: ["Tiago", "João", "Pedro", "André", "Filipe"],
    correta: 2,
    versiculo: "Lucas 22:61",
    curiosidade: "Pedro chorou amargamente após negar Jesus como Ele havia predito."
  },
  {
    pergunta: "Em qual cidade Jesus nasceu?",
    opcoes: ["Jerusalém", "Nazaré", "Belém", "Cafarnaum", "Hebrom"],
    correta: 2,
    versiculo: "Mateus 2:1",
    curiosidade: "Belém de Judá era profetizada como local do nascimento do Messias."
  },
  {
    pergunta: "Qual foi o nome do gigante derrotado por Davi?",
    opcoes: ["Sefar", "Isbi-Benobe", "Zabude", "Golias", "Samgar"],
    correta: 3,
    versiculo: "1 Samuel 17:4",
    curiosidade: "Golias era um guerreiro filisteu de quase 3 metros de altura!"
  },
  {
    pergunta: "Qual o nome do homem rico que ofereceu seu túmulo para Jesus?",
    opcoes: ["Nicodemos", "Zaqueu", "Bartolomeu", "José de Arimateia", "Simão"],
    correta: 3,
    versiculo: "Mateus 27:57-60",
    curiosidade: "José de Arimateia era discípulo secreto de Jesus."
  },
  {
    pergunta: "Quem escreveu a maioria das cartas do Novo Testamento?",
    opcoes: ["Pedro", "Tiago", "Paulo", "João", "Judas"],
    correta: 2,
    versiculo: "Romanos 1:1",
    curiosidade: "Paulo escreveu ao menos 13 epístolas às igrejas e discípulos."
  },
  {
    pergunta: "Quem foi o rei que viu a escrita misteriosa na parede?",
    opcoes: ["Nabucodonosor", "Dario", "Belsazar", "Ciro", "Tibério"],
    correta: 2,
    versiculo: "Daniel 5:5",
    curiosidade: "A mensagem 'Mene, Mene, Tequel e Parsim' anunciou o fim de seu reinado."
  },
    {
    pergunta: "Qual discípulo foi escolhido para substituir Judas Iscariotes?",
    opcoes: ["Barnabé", "Matias", "Silas", "Lucas", "Apolo"],
    correta: 1,
    versiculo: "Atos 1:26",
    curiosidade: "Matias foi escolhido por sorteio entre dois discípulos fiéis."
  },
  {
    pergunta: "Quantas pessoas foram salvas na arca de Noé?",
    opcoes: ["2", "4", "6", "8", "10"],
    correta: 3,
    versiculo: "1 Pedro 3:20",
    curiosidade: "Noé, sua esposa, seus três filhos e suas noras — 8 no total."
  },
  {
    pergunta: "Quem teve sua visão restaurada com lodo feito por Jesus?",
    opcoes: ["Bartimeu", "Homem de Betesda", "Homem de nascença", "Nicodemos", "Zaqueu"],
    correta: 2,
    versiculo: "João 9:6-7",
    curiosidade: "Jesus cuspiu no chão, fez lodo e ungiu os olhos do cego de nascença."
  },
  {
    pergunta: "Em que cidade os discípulos foram chamados de cristãos pela primeira vez?",
    opcoes: ["Corinto", "Jerusalém", "Roma", "Antioquia", "Éfeso"],
    correta: 3,
    versiculo: "Atos 11:26",
    curiosidade: "O termo 'cristão' surgiu em Antioquia como forma de identificação."
  },
  {
    pergunta: "Quem escreveu o livro de Lamentações?",
    opcoes: ["Isaías", "Jeremias", "Ezequiel", "Daniel", "Ageu"],
    correta: 1,
    versiculo: "Lamentações 1:1",
    curiosidade: "Jeremias lamenta a destruição de Jerusalém com forte emoção poética."
  },
  {
    pergunta: "Qual personagem teve seu nome trocado para Israel?",
    opcoes: ["Jacó", "Esaú", "Abraão", "Isaque", "Moisés"],
    correta: 0,
    versiculo: "Gênesis 32:28",
    curiosidade: "Após lutar com Deus, Jacó recebeu o nome Israel — 'aquele que luta com Deus'."
  },
  {
    pergunta: "Quantos dias Jesus jejuou no deserto?",
    opcoes: ["21", "10", "30", "7", "40"],
    correta: 4,
    versiculo: "Mateus 4:2",
    curiosidade: "Jesus jejuou por 40 dias antes de ser tentado pelo diabo."
  },
  {
    pergunta: "Qual rei mandou lançar Daniel na cova dos leões?",
    opcoes: ["Nabucodonosor", "Ciro", "Dario", "Belsazar", "Herodes"],
    correta: 2,
    versiculo: "Daniel 6:16",
    curiosidade: "Dario não queria, mas foi obrigado pela sua própria lei."
  },
  {
    pergunta: "Quem escreveu o Salmo 51, após cometer pecado?",
    opcoes: ["Davi", "Asafe", "Salomão", "Etã", "Moisés"],
    correta: 0,
    versiculo: "Salmos 51:1",
    curiosidade: "Davi escreveu este salmo de arrependimento após seu pecado com Bate-Seba."
  },
  {
    pergunta: "Quem viu os céus abertos e Jesus à direita de Deus antes de morrer apedrejado?",
    opcoes: ["Paulo", "Tiago", "Estevão", "Pedro", "João"],
    correta: 2,
    versiculo: "Atos 7:55-60",
    curiosidade: "Estevão foi o primeiro mártir cristão e morreu cheio do Espírito Santo."
  },
    {
    pergunta: "Quem foi chamado de 'amigo de Deus'?",
    opcoes: ["Moisés", "Abraão", "Davi", "Elias", "Josué"],
    correta: 1,
    versiculo: "Tiago 2:23",
    curiosidade: "Abraão foi reconhecido por sua fé e chamado de amigo de Deus."
  },
  {
    pergunta: "Quem escreveu o livro de Eclesiastes?",
    opcoes: ["Salomão", "Davi", "Esdras", "Moisés", "Jeremias"],
    correta: 0,
    versiculo: "Eclesiastes 1:1",
    curiosidade: "O Pregador é identificado como Salomão, filho de Davi, rei em Jerusalém."
  },
  {
    pergunta: "Qual profeta foi engolido por um grande peixe?",
    opcoes: ["Oséias", "Jonas", "Naum", "Abacuque", "Miquéias"],
    correta: 1,
    versiculo: "Jonas 1:17",
    curiosidade: "Jonas passou três dias e três noites no ventre do peixe."
  },
  {
    pergunta: "Quem conduziu o povo para fora do Egito?",
    opcoes: ["Josué", "Arão", "Moisés", "Samuel", "Calebe"],
    correta: 2,
    versiculo: "Êxodo 3:10",
    curiosidade: "Deus chamou Moisés para libertar os israelitas da escravidão egípcia."
  },
  {
    pergunta: "Qual é o menor versículo da Bíblia?",
    opcoes: ["João 11:35", "Êxodo 20:13", "1 Tessalonicenses 5:16", "Gênesis 1:1", "Salmos 117:2"],
    correta: 0,
    versiculo: "João 11:35",
    curiosidade: "“Jesus chorou.” — um versículo curto, mas cheio de compaixão."
  },
  {
    pergunta: "Qual livro vem imediatamente antes de Apocalipse?",
    opcoes: ["3 João", "Judas", "Tiago", "Hebreus", "1 Pedro"],
    correta: 1,
    versiculo: "Judas 1:1",
    curiosidade: "Judas tem apenas 1 capítulo e precede o Apocalipse."
  },
  {
    pergunta: "Qual dos discípulos era conhecido como 'o zelote'?",
    opcoes: ["Simão", "Tiago", "Judas", "Tomé", "André"],
    correta: 0,
    versiculo: "Lucas 6:15",
    curiosidade: "Simão, o Zelote, fazia parte de um grupo judeu radical antes de seguir Jesus."
  },
  {
    pergunta: "Quem subiu a um sicômoro para ver Jesus?",
    opcoes: ["Zaqueu", "Nicodemos", "Simão", "Bartolomeu", "Levi"],
    correta: 0,
    versiculo: "Lucas 19:4",
    curiosidade: "Zaqueu era baixo e subiu em uma árvore para enxergar Jesus entre a multidão."
  },
  {
    pergunta: "Qual era a profissão de Pedro antes de seguir Jesus?",
    opcoes: ["Pastor de ovelhas", "Carpinteiro", "Pescador", "Escriba", "Ferreiro"],
    correta: 2,
    versiculo: "Mateus 4:18",
    curiosidade: "Pedro e seu irmão André eram pescadores no Mar da Galileia."
  },
  {
    pergunta: "Qual discípulo é chamado de 'filho do trovão' junto com seu irmão?",
    opcoes: ["João", "Tiago", "Pedro", "Tomé", "André"],
    correta: 0,
    versiculo: "Marcos 3:17",
    curiosidade: "Jesus deu a João e Tiago o apelido de 'Boanerges' — filhos do trovão."
  },
    {
    pergunta: "Quem foi chamado por Deus através de uma sarça ardente?",
    opcoes: ["Abraão", "Moisés", "Josué", "Elias", "Isaque"],
    correta: 1,
    versiculo: "Êxodo 3:2-4",
    curiosidade: "Moisés viu a sarça em chamas que não se consumia — um chamado divino."
  },
  {
    pergunta: "Qual livro da Bíblia não menciona diretamente o nome de Deus?",
    opcoes: ["Ester", "Neemias", "Cantares", "Rute", "Esdras"],
    correta: 0,
    versiculo: "Livro de Ester (todo)",
    curiosidade: "Apesar de não citar Deus, Sua providência é vista em cada detalhe do livro."
  },
  {
    pergunta: "Quem foi a primeira pessoa a ver Jesus ressuscitado?",
    opcoes: ["Pedro", "João", "Maria Madalena", "Tomé", "Marta"],
    correta: 2,
    versiculo: "João 20:14-16",
    curiosidade: "Maria Madalena foi a primeira a vê-Lo e anunciar aos discípulos."
  },
  {
    pergunta: "Quantos livros há na Bíblia protestante?",
    opcoes: ["63", "66", "70", "72", "69"],
    correta: 1,
    versiculo: "Nenhum versículo direto — é organização canônica",
    curiosidade: "A Bíblia protestante possui 66 livros: 39 no AT e 27 no NT."
  },
  {
    pergunta: "Qual rei escreveu o Salmo 23?",
    opcoes: ["Salomão", "Saul", "Davi", "Josafá", "Ezequias"],
    correta: 2,
    versiculo: "Salmos 23:1",
    curiosidade: "Davi, pastor de ovelhas e rei, escreveu esse salmo tão conhecido."
  },
  {
    pergunta: "Qual profeta foi alimentado por corvos no deserto?",
    opcoes: ["Ezequiel", "Jeremias", "Elias", "Jonas", "Miquéias"],
    correta: 2,
    versiculo: "1 Reis 17:4-6",
    curiosidade: "Durante a seca, corvos traziam pão e carne a Elias todos os dias."
  },
  {
    pergunta: "Quem escreveu as cartas a Timóteo?",
    opcoes: ["João", "Pedro", "Tiago", "Paulo", "Lucas"],
    correta: 3,
    versiculo: "1 Timóteo 1:1-2",
    curiosidade: "Paulo escreveu instruções pastorais a seu discípulo e filho na fé, Timóteo."
  },
  {
    pergunta: "Qual imperador romano governava na época do nascimento de Jesus?",
    opcoes: ["César Augusto", "Nero", "Tibério", "Calígula", "Cláudio"],
    correta: 0,
    versiculo: "Lucas 2:1",
    curiosidade: "César Augusto decretou o recenseamento que levou Maria a Belém."
  },
  {
    pergunta: "Quem teve um sonho com uma escada que tocava o céu?",
    opcoes: ["José", "Jacó", "Moisés", "Abraão", "Isaque"],
    correta: 1,
    versiculo: "Gênesis 28:12",
    curiosidade: "Jacó viu anjos subindo e descendo por uma escada até o céu."
  },
  {
    pergunta: "Qual personagem foi chamado de 'homem segundo o coração de Deus'?",
    opcoes: ["Salomão", "Samuel", "Davi", "Elias", "Paulo"],
    correta: 2,
    versiculo: "Atos 13:22",
    curiosidade: "Apesar de seus erros, Davi agradava a Deus com sinceridade de coração."
  },
    {
    pergunta: "Qual dos apóstolos teve uma visão de um lençol com animais impuros?",
    opcoes: ["Tiago", "Paulo", "João", "Pedro", "Filipe"],
    correta: 3,
    versiculo: "Atos 10:11-15",
    curiosidade: "Pedro teve a visão que ensinava que Deus não faz acepção de pessoas."
  },
  {
    pergunta: "Quem foi o homem mais forte da Bíblia?",
    opcoes: ["Golias", "Davi", "Sansão", "Joabe", "Calebe"],
    correta: 2,
    versiculo: "Juízes 16:30",
    curiosidade: "Sansão recebeu força sobrenatural de Deus enquanto mantinha o voto de nazireu."
  },
  {
    pergunta: "Quantos livros há no Novo Testamento?",
    opcoes: ["27", "39", "66", "33", "24"],
    correta: 0,
    versiculo: "Organização canônica",
    curiosidade: "O Novo Testamento contém 27 livros, de Mateus a Apocalipse."
  },
  {
    pergunta: "Quem escreveu o livro de Hebreus?",
    opcoes: ["Pedro", "Apolo", "Paulo", "Autor desconhecido", "João"],
    correta: 3,
    versiculo: "Hebreus 1:1",
    curiosidade: "O autor não se identifica; há debates sobre sua autoria até hoje."
  },
  {
    pergunta: "Qual era a capital do império babilônico?",
    opcoes: ["Nínive", "Jerusalém", "Babilônia", "Damasco", "Persépolis"],
    correta: 2,
    versiculo: "Daniel 1:1",
    curiosidade: "Babilônia foi o centro do império que levou Israel ao exílio."
  },
  {
    pergunta: "Quem interpretou o sonho da estátua com quatro metais?",
    opcoes: ["José", "Daniel", "Ezequiel", "Salomão", "Jeremias"],
    correta: 1,
    versiculo: "Daniel 2:31-45",
    curiosidade: "Daniel interpretou o sonho de Nabucodonosor, revelando reinos futuros."
  },
  {
    pergunta: "Quem era o profeta conhecido por chorar muito?",
    opcoes: ["Jeremias", "Elias", "Isaías", "Miquéias", "Oséias"],
    correta: 0,
    versiculo: "Jeremias 9:1",
    curiosidade: "Jeremias ficou conhecido como 'o profeta chorão' por seu lamento por Israel."
  },
  {
    pergunta: "Qual livro da Bíblia possui apenas 2 capítulos?",
    opcoes: ["Ageu", "Judas", "Obadias", "Naum", "Filemom"],
    correta: 0,
    versiculo: "Ageu 1:1",
    curiosidade: "Ageu tem apenas 2 capítulos e exorta à reconstrução do templo."
  },
  {
    pergunta: "Quem ressuscitou Lázaro dentre os mortos?",
    opcoes: ["Pedro", "Paulo", "Jesus", "Elias", "Eliseu"],
    correta: 2,
    versiculo: "João 11:43-44",
    curiosidade: "Jesus chorou por Lázaro e o chamou para fora do túmulo após 4 dias."
  },
  {
    pergunta: "Qual personagem bíblico teve uma mãe que fez um voto antes de sua concepção?",
    opcoes: ["Isaque", "Samuel", "Sansão", "João Batista", "Jacó"],
    correta: 1,
    versiculo: "1 Samuel 1:11",
    curiosidade: "Ana prometeu dedicar Samuel ao Senhor se tivesse um filho — e cumpriu."
  }
];

let perguntaAtual = 0;
let pontos = 0;
let vidas = 5;

const musica = document.getElementById("musicaFundo");
const somAcerto = document.getElementById("somAcerto");
const somErro = document.getElementById("somErro");

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function iniciarQuiz() {
  musica.play();
  perguntaAtual = 0;
  pontos = 0;
  vidas = 5;

  embaralharArray(perguntas); // ← embaralha as perguntas

  document.getElementById("pontos").innerText = "Pontos: 0";
  mostrarTela("quiz");
  carregarPergunta();
  atualizarVidas();
}

function carregarPergunta() {
  const q = perguntas[perguntaAtual];
  document.getElementById("pergunta").innerText = q.pergunta;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  q.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.onclick = () => responder(index);
    opcoesDiv.appendChild(botao);
  });

  document.getElementById("versiculoBox").innerHTML = "";
}

function responder(resposta) {
  const q = perguntas[perguntaAtual];
  let versiculo = `<strong>Versículo:</strong> ${q.versiculo}<br><em>${q.curiosidade}</em>`;

  if (resposta === q.correta) {
    pontos++;
    somAcerto.play();
  } else {
    vidas--;
    somErro.play();
  }

  document.getElementById("pontos").innerText = "Pontos: " + pontos;
  document.getElementById("versiculoBox").innerHTML = versiculo;
  atualizarVidas();

  const botoes = document.querySelectorAll("#opcoes button");
  botoes.forEach(btn => btn.disabled = true);

  document.getElementById("btnProxima").style.display = "inline-block";
}

function proximaPergunta() {
  perguntaAtual++;

  document.getElementById("btnProxima").style.display = "none";

  if (perguntaAtual >= perguntas.length || vidas <= 0) {
    finalizarQuiz();
  } else {
    carregarPergunta();
  }
}

function atualizarVidas() {
  const vidasDiv = document.getElementById("vidas");
  vidasDiv.innerHTML = "📜".repeat(vidas);
}

function finalizarQuiz() {
  mostrarTela("final");
  const mensagem = gerarMensagemFinal(pontos);
  document.getElementById("mensagemFinal").innerText = mensagem.titulo;
  document.getElementById("versiculoFinal").innerText = mensagem.versiculo;
}

function gerarMensagemFinal(pontos) {
  if (pontos <= 2) {
    return {
      titulo: "Aprendiz — A jornada apenas começou.",
      versiculo: "Provérbios 9:10 — O temor do Senhor é o princípio da sabedoria."
    };
  } else if (pontos <= 4) {
    return {
      titulo: "Discípulo — Você está no caminho certo.",
      versiculo: "Salmos 119:105 — Lâmpada para os meus pés é a tua palavra."
    };
  } else if (pontos <= 6) {
    return {
      titulo: "Sábio — Muito bem! Tens buscado a verdade.",
      versiculo: "João 5:39 — Examinai as Escrituras..."
    };
  } else if (pontos < perguntas.length) {
    return {
      titulo: "Teólogo — Você conhece profundamente as Escrituras!",
      versiculo: "2 Timóteo 3:16 — Toda a Escritura é inspirada por Deus..."
    };
  } else {
    return {
      titulo: "Mestre das Escrituras — Você dominou o quiz!",
      versiculo: "2 Timóteo 4:7 — Combati o bom combate, acabei a carreira, guardei a fé."
    };
  }
}

function mostrarTela(id) {
  document.querySelectorAll(".tela").forEach(t => {
    t.classList.remove("ativa");
  });
  document.getElementById(id).classList.add("ativa");
}

function mostrarInstrucoes() {
  document.getElementById("conteudoExtra").innerHTML = `
    <h2>Instruções</h2>
    <p>Você terá 3 pergaminhos (vidas).</p>
    <p>Cada pergunta certa soma pontos. Ao errar, perde uma vida.</p>
    <p>Ao final, uma mensagem será exibida com base no seu desempenho.</p>
  `;
  mostrarTela("extras");
}

function mostrarVersiculos() {
  document.getElementById("conteudoExtra").innerHTML = `
    <h2>Versículos Memoráveis</h2>
    <ul>
      <li>João 3:16</li>
      <li>Salmos 23</li>
      <li>Romanos 8:28</li>
      <li>Gênesis 1:1</li>
    </ul>
  `;
  mostrarTela("extras");
}

function mostrarCreditos() {
  document.getElementById("conteudoExtra").innerHTML = `
    <h2>Créditos</h2>
    <p>Quiz criado com carinho por @pedrxxa e ChatGPT ❤️</p>
  `;
  mostrarTela("extras");
}

function reiniciarQuiz() {
  mostrarTela("menu");
}

function voltarMenu() {
  mostrarTela("menu");
}
