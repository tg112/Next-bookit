import Layout from '../components/Layout/Layout'
import Top from '../components/Top'
import { getRooms } from '../redux/actions/roomActions'
import { wrapper } from '../redux/store'


export default function Home() {
  return (
    <Layout>
      <Top />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(getRooms(req))
});