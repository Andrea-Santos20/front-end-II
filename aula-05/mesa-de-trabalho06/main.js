let containerRef = document.querySelector('#container');

function temaDark() {
   let body = document.querySelector('body');
    body.classList.toggle('body-dark-mode');

   let titulo = document.querySelector('header');
    titulo.classList.toggle('dark-header');      
}

function itens() {
    let cards = [...document.querySelectorAll('.item')];
    cards.map((cards) => {
    cards.classList.toggle('dark-item');
})
}

function tituloCards() {
   let cardTexto = [...document.querySelectorAll('div h2, p')];
   cardTexto.map((cardTexto) => {
   cardTexto.classList.toggle('dark-mode-h2');
})
}

document.querySelector('button').addEventListener('click', temaDark);
document.querySelector('button').addEventListener('click', itens);
document.querySelector('button').addEventListener('click', tituloCards);

const itemFelinos = [
    {
        imagem: './img/tiger.jpg',
        titulo: 'O tigre',
        descricao: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)\
        pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador\
        carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    },

    {
        imagem: './img/leon.jpg',
        titulo: 'O leão',
        descricao:  'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero\
        gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África\
        subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da\
        Índia.'
    },

    {
        imagem: './img/leopardo.jpg',
        titulo: 'O leopardo',
        descricao:  ' O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros\
        felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso\
        hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra\
        (melanista).'
    },

    {
        imagem: './img/pantera-negra.jpg',
        titulo: 'A pantegra negra',
        descricao:  'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o\
        leopardo (Panthera pardus) e a onça-pintada (Panthera onca).\
        Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma\
        variação negra destes animais.'
    },

    {
        imagem: './img/jaguar.jpg',
        titulo: 'O jaguar',
        descricao:  'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do\
        gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também\
        é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera\
        leo).'
    },
    
    {
        imagem: './img/chita.jpg',
        titulo: 'O guepardo',
        descricao:  'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único\
        representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre\
        mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
    },
    
];

for (let felinos of itemFelinos) {
    
    containerRef.innerHTML += `
    <div class="item">
      <img src="${felinos.imagem}">
      <h2>${felinos.titulo}</h2>
      <p>${felinos.descricao}</p>
    </div>
    `
}


