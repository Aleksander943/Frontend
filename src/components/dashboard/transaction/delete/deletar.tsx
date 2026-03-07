
const deletarTransacao = async (id: string, onSucess: () => void) =>{ 
        try{
            const token = localStorage.getItem('token')

            const resp = await fetch(`http://localhost:8080/transaction/${id}`,{
                method: 'DELETE',
                headers:{
                    Authorization: `Bearer ${token}`,
                    'content-type': 'application/json',
                }
            })
            if(resp.ok){
                alert("Deletado com sucesso")
                onSucess()
            }
        } catch {
            alert("Erro ao deletar")
        }
    };

export default deletarTransacao;