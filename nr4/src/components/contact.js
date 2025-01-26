const Contact = () => {
  return (
    <div className=" bg-green-400">
      <h1 className="font-bold text-3xl">contact</h1>
      <form>
        <input className="border border-black p-2 m-2" placeholder="name"type="text"/>
        <input  type="text"className="border border-black p-2 m-2" placeholder="messgae"/>
        <button className="border rounded text-white bg-black p-2 m-2">submit</button>
      </form>
    </div>
  )
}

export default Contact