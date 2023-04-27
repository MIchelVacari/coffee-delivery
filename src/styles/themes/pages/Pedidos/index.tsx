import {
  Entrega,
  FormOfPayment,
  FormPay,
  ItensContainer,
  Page, PayTitulo, PedidosContainer,
  SubTituloPedidos, TotalItens,
  ValorTotal, WatchItensContainer
} from "./style";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react'
import expr from "../../../../imagens-produts/expre-tradicional.png"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from "react";



const newCycleFormValidationSchema = zod.object({
  id: zod.string(),
  cpf: zod.string().min(11, 'informe somente os números do seu CPF'),
  rua: zod.string().min(5).max(60),
  numero: zod.number().min(1).max(5),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string().min(2).max(2)

})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string;
  cpf: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Pedido() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      id: '',
      cpf: '',
      rua: '',
      numero: 0,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime()) 

    const newCycle: Cycle = {
      id,
      cpf: data.cpf,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
  }

  const activeCycle = cycles.find(cycle => cycle.id == activeCycleId)
  console.log(activeCycle)
  return (
    <Page>
      <PedidosContainer>
        <h3>Complete seu pedido</h3>
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
          <SubTituloPedidos>
            <button>
              <MapPinLine size={24} />
            </button>
            <span>Endereço de entrega</span>
            <p>informe o endereço onde deseja receber seu pedido</p>
          </SubTituloPedidos>
          <input type='text' placeholder="CEP" {...register("cpf")}/>
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Numero" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </form>

        <FormOfPayment>
          <PayTitulo>
            <button><CurrencyDollar size={24} /></button>
            <span>Pagamento</span>
          </PayTitulo>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
          <FormPay>
            <button  ><CreditCard size={24} />Cartão de Crédito</button>
            <button >< Bank size={24} /> Cartão de Débito</button>
            <button ><Money size={24} />Dinheiro</button>
          </FormPay>
        </FormOfPayment>
      </PedidosContainer>

      <PedidosContainer>
        <h3>Cafés selecionados</h3>
        <ItensContainer>
          <WatchItensContainer>
            <img src={expr} alt="" />
            <p>Expresso Tradicional</p>
            <p>R$: 9,90</p>
            <input type="text" id="count" />
            <button id="trash">
              <Trash size={24} /> REMOVER
            </button>
          </WatchItensContainer>

          <TotalItens>
            <p>Total de itens</p>
            <p>R$: 29,99</p>
          </TotalItens>
          <Entrega>
            <p>Entrega</p>
            <p>R$: 3,50</p>
          </Entrega>
          <ValorTotal>
            <p>Total</p>
            <p>R$: 33,20</p>
          </ValorTotal>
          <button type="submit" >
            CONFIRMAR PEDIDO
          </button>
        </ItensContainer>
      </PedidosContainer>
    </Page>
  )
}