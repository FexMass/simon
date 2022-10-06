import './App.css'
import useAxiosRequest from './service/requests'
import { MyTimerHook } from './service/timerHook'

const App = () => {

  const { data, error, loaded } = useAxiosRequest(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    null
  )

  // when request is loaded
  if (loaded) {
    return error ? (
      <span>Error: {error}</span>
    ) : (
      <MyTimerHook expiryTimestamp={data} />
    )
  }

  return (
    <div className="App">
     <span>Loading request...</span>
    </div>
  );
}

export default App;
