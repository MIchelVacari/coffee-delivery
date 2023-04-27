import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { InforContainer, LocalStatus, MoneyStatus, StatusContainer, TimerStatus, Titulos } from './style'

export function ConfirmaContainer() {
  return (
    <StatusContainer>
      <Titulos>
        <h1>Uhu! Pedido Confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </Titulos>
      
      <InforContainer>
        <LocalStatus>
          <button>
            < MapPin size={24} />
          </button>
          <p>Entrega em Rua João martinell, 102 Ferrapos -  Porto Alegre, RS</p>
        </LocalStatus>
        <TimerStatus>
          <button>
            <Timer size={24} />
          </button>
          <p>Previsão de enterga</p>
          <p>20min - 30 min</p>
        </TimerStatus>
        <MoneyStatus>
          <button>
            < CurrencyDollar
              size={24} />
          </button>
          <p>Pagamento na Entrega</p>
        </MoneyStatus>
      </InforContainer>
    </StatusContainer>

  )
}