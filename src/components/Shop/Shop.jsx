import useFetch from '../../hooks/useFetch'
import Loading from '../../utils/Loading'
import Item from './Item'

export default function Shop() {
  const {loading, data} = useFetch('/api/shop', {method: 'GET'})

  return <>
    {loading && <Loading />}

    {data ? // data -> false = Hide Goodies
    <div className='shop d-flex flex-column align-items-center'>
      <h1 className='section-title fs-1'>Goodies</h1>
      <div className='list-shop'>
        {
          data.map((item, id) => (
              <Item item={item} key={id} />
            ))
          }
      </div>
    </div>
    : <span className='fst-italic text-body-secondary d-flex justify-content-center'>Indisponible pour le moment</span>}
  </>
} 