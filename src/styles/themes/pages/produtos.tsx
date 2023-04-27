import expr from "../../../../src/imagens-produts/expre-tradicional.png"
import americano from "../../../imagens-produts/exp-americano.png"
import cremoso from "../../../imagens-produts/exp-cremoso.png"
import gelado from "../../../imagens-produts/exp-gelado.png"
import comLeite from "../../../imagens-produts/cafe-com-leite.png"
import latte from "../../../imagens-produts/latte.png"
import capuccino from ".././/../../imagens-produts/capuccino.png"
import macchiato from "../../../imagens-produts/macchiato.png"
import mocaccino from "../../../imagens-produts/mocaccino.png"
import chocoQuente from "../../../imagens-produts/choco-quente.png"
import cubano from "../../../imagens-produts/cubano.png"
import havaiano from "../../../imagens-produts/havaiano.png"
import arabe from "../../../imagens-produts/arabe.png"
import irlandes from "../../../imagens-produts/irlandes.png"

export const listaDeProdutos = [
  {
    "imagem": expr,
    "nome": "Expresso Tradicional",
    "type": "tradicional",
    "descrição": "O tradicional café feito com água quente e grãos moídos",
    "preço": 9.90, 
  },

  {
    "imagem": americano,
    "nome": "Expresso Americano",
    "type": "tradicional",
    "descrição": "Expresso diluído, menos intenso que o tradicional",
    "preço": 9.90, 
  },

  {
    "imagem": gelado,
    "nome": "Expresso Gelado",
    "type": ["tradicional", "gelado"],
    "descrição": "Bebida preparada com café expresso e cubos de gelo",
    "preço": 9.90, 
  },

   {
    "imagem": cremoso,
    "nome": "Expresso Cremoso",
    "type": "tradicional",
    "descrição": "Café expresso tradicional com espuma cremosa",
    "preço": 9.90, 
  },

  {
    "imagem": comLeite,
    "nome": "Café com leite",
    "type": ["tradicional", "com leite"],
    "descrição": "Meio a meio de expresso tradicional com leite vaporizado",
    "preço": 9.90, 
  },


  {
    "imagem": latte,
    "nome": "Latte",
    "type": ["tradicional", "com leite"],
    "descrição": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "preço": 9.90, 
  },

  {
    "imagem": capuccino,
    "nome": "Capuccino",
    "type": ["tradicional", "com leite"],
    "descrição": "Bebida com canela feita de doses iguais de café, leite e espuma",
    "preço": 9.90, 
  },

  {
    "imagem": macchiato,
    "nome": "Macchiato",
    "type": ["tradicional", "com leite"],
    "descrição": "Café expresso misturado com um pouco de leite quente e espuma",
    "preço": 9.90, 
  },

  {
    "imagem": mocaccino,
    "nome": "Mocaccino",
    "type": ["tradicional", "com leite"],
    "descrição": "Café expresso com calda de chocolate, pouco leite e espuma",
    "preço": 9.90, 
  },
  
  {
    "imagem": chocoQuente,
    "nome": "Chocolate Quente",
    "type": ["especial", "com leite"],
    "descrição": "Bebida feita com chocolate dissolvido no leite quente café",
    "preço": 9.90, 
  },

  {
    "imagem": cubano,
    "nome": "Cubano",
    "type": ["especial","alcoólico", "com leite"],
    "descrição": "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "preço": 9.90, 
  },

  {
    "imagem": havaiano,
    "nome": "Havaiano",
    "type": "especial",
    "descrição": "Bebida adocicada preparada com café e leite de coco",
    "preço": 9.90, 
  },

  {
    "imagem": arabe,
    "nome": "Árabe",
    "type": "especial",
    "descrição": "Bebida preparada com grãos de café árabe e especiarias",
    "preço": 9.90, 
  },

  {
    "imagem": irlandes,
    "nome": "Irlandês",
    "type": ["especial", "alcoólico"],
    "descrição": "Bebida a base de café, uisque irlandês, açucar e chantilly",
    "preço": 9.90, 
  },
]

