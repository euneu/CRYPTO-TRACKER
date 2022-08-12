import styled from "styled-components";

interface PriceProps {
  tickersData: IPriceData;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Overview = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span:first-child {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Tickerview = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const TickerviewItem = styled.div`
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  span:nth-child(1) {
    color: ${(props) => props.theme.accentColor};
    font-size: 15px;
    padding: 10px 0px 0px 0px;
  }
  span:nth-child(2) {
    padding: 10px 0px;
  }
`;

function Price({ tickersData }: PriceProps) {
  return (
    <>
      <Overview>
        <OverviewItem>
          <span>최고가</span>
        </OverviewItem>
        <OverviewItem>
          ${tickersData.quotes.USD.price?.toLocaleString()}
        </OverviewItem>
      </Overview>
      <Tickerview>
        <TickerviewItem>
          <span>시가</span>
          <span>{tickersData.quotes.USD.market_cap?.toLocaleString()}</span>
        </TickerviewItem>
        <TickerviewItem>
          <span>거래량(24H)</span>
          <span>{tickersData.quotes.USD.volume_24h?.toLocaleString()}</span>
        </TickerviewItem>
        <TickerviewItem>
          <span>변동(24H)</span>
          <span>
            {tickersData.quotes.USD.percent_change_24h.toLocaleString()}%
          </span>
        </TickerviewItem>
        <TickerviewItem>
          <span>변동(7D)</span>
          <span>
            {tickersData.quotes.USD.percent_change_7d.toLocaleString()}%
          </span>
        </TickerviewItem>
      </Tickerview>
    </>
  );
}

export default Price;
