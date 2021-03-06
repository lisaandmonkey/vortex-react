import { injectReducer } from 'store/reducers'
import { store } from 'main'
import Counter from './containers/CounterContainer'
import reducer from './modules/counter'

// inject reducer
injectReducer(store, { key: 'counter', reducer })

export default Counter
