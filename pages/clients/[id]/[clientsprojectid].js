import { useRouter } from 'next/router'

function SelectedClientsProjectPage(){
    const router = useRouter();

    console.log(router.query)

    return(
      <div>
        <h1>The Project Page for a Specific Project for a Selected Clients</h1>
      </div>
    );
  }
  
  export default SelectedClientsProjectPage;