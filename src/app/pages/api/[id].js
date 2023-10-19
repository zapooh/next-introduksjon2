import axios from 'axios';

function Item({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
      {/* Andre detaljer her... */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await axios.get(`https://api.eksempel.com/items/${id}`);
  return {
    props: { item: res.data }
  };
}

export default Item;
