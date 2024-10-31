const quotes = [
    "Passados 10 minutos da hora, mais ninguém entra!",
    "Isto vai doer, mas eu estou aqui para que doa menos.",
    "Estou a ver que trouxe a capa preservativa ... (tira o trabalho da mica), deixe estar que eu gosto mais ao natural.",
    "Você está aí impávida e serena, que nem freira do Convento de Arouca.",
    "Estou farto disto. Um tipo agora quer é ver mulheres nuas.",
    "Aising? Ising! Em Roma, sê Romano.",
    "Sino? Você não deve gostar mesmo da sua mãe. Então você não sabe que isso é Senosoidal?",
    "Quem não usa a Técnica do Apagador, não é boa pessoa.",
    "A Técnica do Apagador permite-nos reflectir sobre reflecções feitas anteriormente.",
    "É Lagrangeano, não é Lagrangiano. O tipo chamava-se Lagrange e não Lagrangi.",
    "O Professor é como um Pai e às vezes, uma Mãe.",
    "As tipas andam de relationship em relashionship. Aquilo é falta de Pai.",
    "Se não souberem fazer, venham ter comigo que eu ilumino-vos, nem que para isso tenha que trazer um lanterna.",
    "Aquela treta da onda e da partícula, um tipo ainda vai ver o que é. Aquilo é como a história da Flatland. Os tipos da Flatland viviam e viam em 2D, por isso só viam partes das coisas em 3D. Se fosse um cilindro, os tipos viam um círculo, ou uma elipse.",
    "Sou Físico, e agora? Agora está é bom para ir para a praia.",
    "Não comeces o mês de Abril com desconfianças.",
    "Fazer contas provoca disfunção erétil.",
    "Físico que é físico só percebe de molas.",
    "Físico que é físico faz sempre um boneco.",
    "Física conceptual? Você... você é poeta.",
    "Porquê que está a escrever a azul? Nem todos aqui são azuis. Nem toda a gente é necessariamente de sangue real.",
    "Aqui vale tudo. Até arrancar olhos. Desde que...seja bem feito, evidentemente.",
    "Não há bom vinho do Porto sem bom barril. E não há boa vida sem vinho do Porto.",
    "E você a dar-lhe. Escreva direito. Ai jesus...ai...eu ainda vou acabar a trabalhar num ATL.",
    "Você tem de fazer bem o boneco. Se o boneco ficar mal, depois não vai compreender o exercício.",
    "Um bocadinho de carga... Cria um bocadinho de campo.",
    "Há três tipos de alunos...os que sabem matemática, os que não sabem matemática e os que querem ser felizes. Você claramente não é o terceiro.",
    "O homem pode ser velho, mas com um berbequim consegue fazer tudo.",
    "Eu sou uma boa mãe. Dou por igual a todos os filhos.",
    "A física é só contas, e quem disser o contrário vê demasiado discovery channel.",
    "Deixe-se de fantasias, que isto aqui não é a guerra das estrelas!",
    "Um bocadinho é um deltinha e um bocadão é um deltão.",
    "Primeiro faz o boneco, depois vem a física e só depois a matemática. Isso não é matemática. Isso são contas.",
    "A menina é que tem um professor de categoria. Isto nem em Cambridge nem no MIT.",
    "Como vê, vai ter que sentar-se no meu colo.",
    "A conta é grande? Não há problema, termina amanhã. Mas faz.",
    "Coice de mula que se preze, segue a distribuição de Poisson.",
    "Uma das vantagens de ser professor é poder dizer: e por simetria...",
    "O que é preciso é encontrar uma boa( )zona!",
    "Sim... porque para ir a fundo... também convém ter tamanho.",
    "Se você está com problemas de existência e unicidade não está no sítio certo! Isso é no outro departamento! (aponta para o Departamento de matemática).",
    "Mas vocês não precisam de saber o nome disto...a não ser que queiram mostrar que sabem... o que... é diferente de saber.",
    "O nosso estudo fica-se por aqui...e já vai dar muita reprovação.",
    "Não basta a gente andar à chuva e molhar-se... há que a sentir... Bob Marley.",
    "Portanto... estou eu aqui todo porreiro da Silva a apanhar Sol...",
    "Qualquer criança de 4 meses compreende isto.",
    "Hão-de reparar que estas portas fecham-se sozinhas. Ora... não há corrente de ar... e a inteligência dos alunos também não está em expansão.",
    "Aprender é uma coisa, ensinar é outra. Há 2 lados da corda. Se os dois lados não puxam... a corda não estica.",
    "Isso é um estimulante. Espero que não tenha sido por causa do varão.",
    "Sempre me quis parecer que as meninas de física são caladinhas... mas lá fora são terríveis.",
    "Há um jogo de sedução entre o professor e o aluno. O professor resolve os exercícios de uma maneira sofisticada, para mostrar que sabe muito, e o aluno observa, absorve a gloriosidade e pensa \"quero ser como o meu Pai\".",
    "Este trabalho é herdeiro do pedantismo intelectual característico de artigos científicos.",
    "Vamos criar um operador à la mecânica quântica, Ô, com o chapéu. Hein? Já estão a aprender umas coisas...",
    "Normalmente não se faz a coisa assim. Podíamos dizer que no infinito a dependência vai ter de ser 1/r, cortar todos estes termos e chegar logo a solução - resolver a coisa à la Landau, um físico Russo...",
    "A terra é gorda na cintura... como acontece a muita boa gente e nao basta dzer que as gorduras vao todas para o brasil.",
    "Aqui estamos a resolver a coisa de maneira que qualquer burro faz isto (quer dizer, coitados dos burros, que até são inteligentes), mas tem de ser. Têm de aprender assim primeiro para mais tarde poderem fazer como o Landau.",
    "Está sorridente...? Estou a ver que está a gostar da performance.",
    "Você deve gostar muito de mim para me tentar impressionar dessa forma...",
    "A sua mãe não sou. Seu pai também não. Quer dizer... acho eu. Vai ter Mecânica Analítica no próximo semestre?",
    "Este trabalho é herdeiro do pedantismo intelectual característico de artigos científicos.",
    "Isto tem de ser servido homeopaticamente, às colherzinhas.",
    "Isso aí é jardinagem.",
    "Pode parecer elementar, mas no final vou ter de pagar as vacas ao dono na mesma. Não há almoços grátis!",
    "Mas cuidado... se fizermos isto, as equações de Euler vão ter um traumatismo craniano.",
    "Vou arrancar a porta, levá-la para casa e vendê-la...vale uns cobres. Até porque hoje em dia isto está... não é...",
    "Enquanto o aluno for tratado como o cliente que tem sempre razão... não funciona. Isto aqui NÃO é um serviço. E mesmo que fosse... o serviço paga-se... sim...",
    "Não se paga à entrada... paga-se à saída! Sim... tal como nas discotecas...não é...",
    "Vamos resolver isto em grupo. Mas é em grupo mesmo, não é em grupos do Facebook.",
    "Este integral não está definido, mas eles não nos pedem para primitivar, pedem-nos para integrar, o que significa que isto aqui é um número. E é aí que entra o Python. Sim... é para isso que o Python foi feito.",
    "Desde quando é que o campo magnético trabalha? O campo magnético é como eu, não faz nenhum!",
    "Você é um sonhador. Você sonha demasiado alto. Mas como bem sabe... quanto mais alto... maior é a queda. Não quer mudar de curso?",
    "O cliente tem de ser bem servido, se não queixa-se.",
    "Vocês perderam uma boa oportunidade de aprender isto. É no que estas aulas se traduzem - na perda de boas oportunidades para aprender. Mas pronto, um gajo tem de sobreviver.",
    "Vamos lá, não tenha medo. Eu estou aqui.",
    "Então tiveram Comunicação em Ciência... e não comunicam?!",
    "Não concordo consigo. Não... isso é a maneira burra de resolver o exercício. Isso aí é para formar eletricistas. Físicos... não.",
    "Pois... os brasileiros gostam muito de seduzir. Nós... nem tanto.",
    "Isto da selecção natural... É assim mais fuzzy, não é assim tão crispy, tem de haver margem para a biodiversidade.",
    "As bananas da Madeira são pequenas, mas são as mais saborosas.",
    "Você só apaga à direita? Não me diga que é de esquerda... não sei se a comissão parlamentar permite essas apagadelas tendenciosas.",
    "Isso não é assim que se diz. Isso é abrasileirado. Hmpf... os brasileiros... a criarem um dialecto que só eles conseguem perceber.",
    "Você não é só um engenheiro! Você é um engenheiro da física! O melhor engenheiro!",
    "Com que então prometeram-me sereias... E É ISTO QUE ME VEM PARAR À REDE...\r",
    "Vocês lembram-se do problema da aula anterior? Não se lembram?... eu tenho assim tantos dons encantatórios... que adormeço qualquer um...",
    "O exterior é um reservatório infinito... não aquece nem arrefece. Quando vão tomar um banho ao mar, ele não muda de temperatura. Pode mudar de cor, mas ISSO É OUTRO FENÓMENO...",
    "O teorema de Carnot é como o remédio de flor... cura tudo, seja onde for.",
    "Vamos passar ao problema 8... nem vale a pena perguntar se querem vir ao quadro ou não...",
    "E isto é um raciocínio linear... se não percebeu, ou não estudou... OU NÃO ESTÁ AQUI A FAZER NADA... não há terceira hipótese.",
    "A física é que é o difícil... a matemática são só uns bocadinhos... há que fazer render o peixe. *começa a cantar o hino nacional*",
    "Teorema de Stokes... teorema de Gauss... é tudo a mesma mer-coisa.",
    "Eu agora estou a trabalhar para os inquéritos pedagógicos...",
    "Isto é quase teoria das cordas...sabe calcular, mas não sabe o que é... é aquela velha máxima: quem não tem cão, caça com gato.",
    "Uma conta é um algoritmo, não é um raciocínio... e esta, hein? Uma conta até o Google faz.",
    "No ano passado tive um aluno que era poeta... a falar-me de física conceptual e fantasias assim...",
    "A resistência no início estava muda... no final saiu calada...",
    "Mas isso não interessa, isso são números... você olha para uma árvore e vê números? Números são uma coisa que não existe, só na nossa cabeça... tudo uma cambada de esquizofrénicos.",
    "Isto é como na engenharia... primeiro faça a coisa à ferreiro... depois faça a coisa à meio ferreiro.",
    "Não é para dar banho ao cão, mas é para dar banho ao chumbo.",
    "Os francess são latinos disfarçados.",
    "Deus não é brasileiro... eu gosto muito de picanha mas Deus não é brasileiro.",
    "Fórmulas? Quais fórmulas? Isto está para aqui uma central de comunicações desgraçada.",
    "É bastante improvável ir num avião com uma bomba. É por isso que eu levo sempre uma bomba comigo, porque ir num avião com duas bombas é ainda mais improvável.",
    "Isto não é fast mecânica analítica, é slow mecânica analítica.",
    "Bem meu caro, na vida nada é fácil, só no Facebook.",
    "Este curso anda a ficar Tiplerizado...",
    "Os engenheiros é que são os nabos... NÃO, ALIÁS, nós é que somos os inteligentes!",
    "A vida é assim, é sempre tau tau!",
    "Vocês estiveram parados nesta semana ou tiveram competências transcendentais?",
    "A ética e a moral é muito boa para os outros",
    "Em relatividade tudo complica",
    "Exímio utilizador da técnica do apagador",
    "A notação não é uma mariquice... A notação é tudo",
    "Os planos e as mulheres querem-se como a pescada... querem-se grandes",
    "Então vamos meter em cima, em cima há quem goste ainda mais",
    "O padrão sou eu é por isso que me pagam",
    "Nas árvores não está lá centímetros, decímetros e metros",
    "Mesmo quem não gosta pode por manteiga que é bom",
    "Você bem que usa a técnica do apagador ou não usa. Isso tem copyright",
    "Aqui é clássica! (diz, olhando para um gato que entrou no exame de Mecânica Analítica)",
    "A gente não pode ser como o Peter Pan, ser pequenino toda a vida.",
    "Antigamente, as pessoas eram ensinadas a serem neuróticas. Agora, são educadas a ser narcisistas.",
    "Isso é o quê? Um hieróglifo egipcio? Não sou propriamente um egitólogo. Isso já está fora do meu alcance.",
    "A homogeneidade está na moda. Agora, querem se convencer que não têm nada entre as pernas.",
    "Você é grande, mas aqui o tamanho não importa. Serve tudo para a mesma função.",
    "Eu aqui não deixo ninguém desamparado, sou como uma boa mãe. Ou como um bom pai, castigo!",
    "Vocês parecem velhinhos, todos na retranca. Deixem a juventude divertir-se. Vocês que idade têm? 75?",
    "Nós já não somos meninos, apesar de virmos de calcõeszinhos para as aulas. É para mostrar os pelos?Elas gostam disso? (olha para a única rapariga na s,aEla não está a prestar atenção...",
    "Portanto, os primeiros dois exercícios são de mão beijada… Mas é preciso saber beijar… e isso treina-se em casa.",
    "Já dizia o nosso presidente: só dança quem está na roda. E ele é um homem que sabe",
    "Vocês controlem a hora disto porque eu não programei o meu bicharoco",
    "[Massa por unidade de comprimento] mede o alentejano da corda, isto é, a inércia da corda",
    "Primeira lei da termodinâmica: tudo se paga neste mundo",
    "Pergunte ao seu colega. Ele é que é o mestre da culinária (começa a assobiar a música)",
    "Quem aprendeu a conduzir um Fiat 500, não tem dificuldade em conduzir um Lamborghini. Mas que é diferente, é!",
    "Eu não tenho qualidade de puro. Puro, perfeito e omnipotente. Tenho as minhas limitações.",
    "A técnica do apagador é a melhor coisa que foi descoberta depois do pão às fatias",
    "Temos de tomar isto como a vacina do COVID: em doses espaçadas no tempo. Vamos então agora tomar a primeira dose e depois tomamos a de reforço",
    "*Aluno escreve sin no quadro* A mãe dos outros é melhor que a sua?",
    "Os engenheiros também lidam com modelos, mas eles adicionam o coeficiente de cagaço",
    "O facto de haver um livro adotado, nao vos garante que saibam aquilo",
    "Na linguagem dos camones, tiry of everytingue",
    "Quem não fizer como eu está mal de certeza",
    "Vê a floresta, mas nao vê a arvore",
    "No céu não há parâmetros para cair",
    "O conhecimento não se transmite por osmose. O conhecimento não é como o virus, não se pega",
    "A população Portuguesa já não se reproduz, só criam cães e gatos",
    "Não é por verem muitos filmes que ficam realizadores",
    "A sedução não é sexo, é muito mais!",
    "Exames com consulta… Hã? Fixe né?",
    "Nenhuma casa funciona sem as regras da casa",
    "Os alunos têm de estar preparadinhos da silva…",
    "Elas não mordem, são mansinhas",
    "Houve um gajo… um cara, como os brasileiros",
    "Tudo começa nos gregos, não é? Nos gregos, nos chineses… Nessa porcaria toda",
    "Charles Augustin de Coulomb, français. Ainda o Brasil não era independente",
    "Tem ali uma coisa que não interessa a ninguém a não ser ao dito cujo… Morreu de cancro…",
    "A matemática é nossa amiga mas tem de ser tratada com respeito. Se não for tratada com respeito ela vira-se contra nós",
    "E como não podia deixar de ser, temos o Tio Alberto",
    "Não viu, vai ver agora. Não sabia, vai ter de aprender",
    "Está absolutamente a leste do paraíso",
    "Estão carecas de saber… Mais do que eu",
    "É uma expressão que a gente vai usar… Com fartura, com fartura",
    "Aqui como já temos meninos grandes e meninas…",
    "Representar um vetor sem o traço ou a seta é disparate",
    "Não há almoços de borla",
    "Como sabem a inflação é galopante, o Covid foi uma desgraça, e não há dinheiro",
    "Não me peçam para dar cabo da minha saúde com contas escusadas",
    "A seu tempo e a doses homeopáticas, vocês vão engolir isto tudo",
    "A vara é sua, a vara do poder",
    "A partir daqui tudo é fácil, a vida é uma alegria",
    "Mas este aqui não foi para vocês, foi a pedido especial do vosso colega. Soft, não é?",
    "Somar bocadinhos sei que dá um bocadão",
    "É leite inteiro. Os que tiverem intolerância à lactose vão sentir dificuldade",
    "Ainda me acusam de criançofilia",
    "Posso mexer no seu computador, professor? PODE, ENTÃO NÃO PODE? ISSO SÓ TEM UMAS IMAGENS AÍ UM BOCADO AFLITIVAS, MAS VOCÊ FECHE OS OLHOS",
    "Andam a criar físicos poetas em vez de físicos que fazem contas",
    "A conta pode ser do camano, nós não temos dentes para aquilo",
    "Agora o resto é matemática, entendam-se lá com os gajos da matemática",
    "Era um referencial e dava para tudo, daqui até à China",
    "Agora até nos balneários se põe como quem não quer coisa em videoconferência… Sempre com sotaque brasileiro. Deve ser um fetiche qualquer",
    "Meus caros, a dificuldade do programa não fui eu que a escolhi",
    "Hoje em dia já nem se pode bater em crianças… Mas torturar psicologicamente, isso já pode",
    "Se se preparam bem, depois já não dói nada",
    "Mas já vai de garrafa na mão?",
    "É do primeiro ano? E veio a uma aula do segundo? Isso é que é vontade de crescer!",
    "A gente pega, e pimba, pimba. Pimba, pimba",
    "(Em relação a Eletromagnetismo II) É isto que faz com que se tenha de prolongar as 4 semanas para as 12 semanas, a não ser que haja aborto",
    "Bem, é tudo por hoje. Vemo-nos... Daqui a duas semanas, não é? Eheh... Vão fazer jardinagem, não é? Colher ovos eheh",
    "A homogeneidade está na moda hoje em dia. Agora querem convencer-se que não têm nada entre as pernas.",
    "Não há almoços de graça, se não se pagar de uma maneira, paga-se de outra.",
    "Quando uma pessoa começa por uma conta, ou é burra... E não quero ofendê-la... Ou está a fugir à dificuldade.",
    "E como vêem não é preciso ser muito inteligente para fazer exercicios de física.",
    "E como vêem fez-se sem os perigos: Torricelli, cálculo integral...",
    "Vamos começar a fazer fogo com uma pedra... Eu cá prefiro um 'squeiro.",
    "Vocês estão a ver? Eu próprio... fui levado... pela ânsia de fazer contas.",
    "Sem voucher, nem nada, desconto direto!",
    "Falta de pai e mãe em casa...",
    "As coisas importantes têm nome.",
    "Cortar o cordão umbilical com a álgebra. Física não é algébrica. Quer dizer, é, mas não interessa.",
    "Mete porco, sai chouriço.",
    "Tem de chiar, isso faz parte da natureza.",
    "Contas não é conversa fiada, não é literatura.",
    "Isto é física... Isto também é física.",
    "Esta tem as pernas abertas e esta cruzadas.",
    "Não tem mal algum chamar-lhe o lisboeta...",
    "Para baixas velocidades, a GNR não lhe faz absolutamente nada",
    "O mais certo é ele ter a GNR à perna, então perdido por 100, perdido por 1000.",
    "O que é que vê o alentejano que está ali sentado à sombra da azinheira?",
    "Não convém estar a ouvir vozes, mas ouvir uma voz de vez em quando sabe bem.",
    "* eery falsetto * É fá-ácil",
    "Moral da história: em relatividade, tudo se complica.",
    "O alentejano diz 'nah nah, não sincronizaste nada'. E o lisboeta diz 'sim-sim!...'",
    "Pimba, isto é uma parte...",
    "O vosso professor já vai abrir isso, em ganda style.",
    "Não é o Flash Gordon, mas está lá perto.",
    "Focado? Tem problemas de focagem, está a ficar pitosga.",
    "Já está a funcionar! Isto é mais que relativo, isto é quântico!",
    "Devagarinho para não partir o biquinho.",
    "Não tenho muito jeito para bruxo.",
    "Fazer contas é como ir ao ginásio tem que bater ferro muitas vezes! Ver os outros a treinar não cria bicep.",
    "Há quem pinte o cabelo para ter inteligência artificial",
    "GitHub... NÃO HÁ! Wolfram Alpha... NÃO HÁ! Feynman Lectures on Physics... NÃO HÁ! Jupyter Notebook... NÃO HÁ! Moodle... NÃO HÁ! ChatGPT... NÃO HÁ!",
    "Vamos ver um filme. Podemos chamar a este filme - 'O homem do berbequim'.",
    "Eu: 'Posso aplicar a técnica do apagador agora?' Pai: 'Pode aplicar SEMPRE a técnica do apagador. A técnica do apagador é universal. Não sei como ainda não mandaram levantar uma estátua minha com um apagador.'",
    "Uma coisa é o manual de instruções do martelo outra é saber usar o martelo. A matemática é o manual de instruções do martelo mas na física temos de o saber e usar.",
    "Vamos lá, vamos lá embora. A sopa já está na mesa. Sopa de nabos...",
    "Isto não é Feynman nem nada, isto é Nunes da Silva!",
    "Há o pêzinho e o pêzão, o têzinho e o ... outro.",
    "'Bonito, bonito... são as pirâmides do Egipto. *um aluno ri-se* Pois, o que eu digo e o que vocês pensam... não é a mesma coisa... *puxa a máscara para baixo* Malandros!'",
    "Pinar é natural",
    "Você é um atleta dos exercícios resolvidos",
    "Você enquanto não explorar isso vai estar no lado negro da força",
    "Já parece um aluno do secundário, é tudo autoestrada em várias faixas e matar tudo pelo caminho",
    "Posso usar a técnica do apagador? \n\n Então, não pode? Vocês depois desta aula até vão fazer uma estátua de mim, não pode ser de esferovite, e por baixo a dizer 'O Verdadeiro Chocolateiro'",
    "(Diz para um aluno depois de ele ter ido ao quadro) \n\n 'Você está com um ar de quem perdeu a virgindade. Eu sei. Já senti isso.'",
    "Meu amigo, você quer falar mas eu não tenho que perder a minha audição a ouvi-lo."
]

const target = document.getElementById("quote")
const numQuotes = document.getElementById("num-quotes")
const numDesta = document.getElementById("num-desta")

// Número total de quotes
numDesta.max = String(quotes.length)


// Escolher a quote
let id = window.location.search.replace(/^\?/,'').replace(/\+/g,' ').split("=");

let quoteEscolhida = -1
if (id.length > 1) {
    quoteEscolhida = Number(id[1]) - 1

}

if (quoteEscolhida < Number(numDesta.min) || quoteEscolhida >= Number(numDesta.max)) {
    quoteEscolhida = Math.floor(Math.random() * quotes.length)
}


// Atualizar o texto e o id da quote
target.innerText = quotes[quoteEscolhida]
numQuotes.innerText = String(quotes.length)
numDesta.value = String(quoteEscolhida + 1)


// Ver o input do utilizador
numDesta.onchange = () => {
    let choice = Number(numDesta.value)
    let link = window.location.href

    if (id.length > 0) {
        link = link.split("?")
        window.location.href = `${link[0]}?id=${choice}`
    } else {
        window.location.href = `${link}?id=${choice}`
    }
    
    console.log()
    console.log(`Change! ${choice}`)
}
