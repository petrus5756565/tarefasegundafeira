const facts = [
  'A Ferrari foi fundada em 1939 por Enzo Ferrari na Itália.',
  'A marca é conhecida por seus carros vermelhos e pela logo do cavalo rampante.',
  'A Ferrari compete na Fórmula 1 desde 1950 e já venceu muitos campeonatos.',
  'O primeiro carro da Ferrari para venda ao público foi o 125 S, em 1947.',
  'A Ferrari usa tecnologia de corrida para tornar seus carros de rua mais rápidos.'
]

const button = document.getElementById('curiosidadeButton')
const text = document.getElementById('curiosidadeText')

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * facts.length)
  text.textContent = facts[randomIndex]
})
