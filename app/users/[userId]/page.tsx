interface UserIdPageProps {
    params: {
        userId: string
    }
}

const Page = ({params}: UserIdPageProps ) => {
    return ( <p>User Id:{params.userId}</p> );
}
 
export default Page;