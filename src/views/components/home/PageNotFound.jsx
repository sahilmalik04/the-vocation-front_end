import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 col-sm-12">
                    <div className="card border-0 rounded-lg mt-5 mx-auto" style={{width: "30rem"}}>
                        
                        <h3 className=" display-6 text-muted text-center mb-3">
                        <span> 
                        <img src="/img/404.png" alt="" height={45} width="45"/>
                        </span> Oops!!
                        </h3>
                        <h5 className=" display-7 text-muted text-center">
                            404 Not Found
                        </h5>

                        <span className="card-subtitle mb-2 text-muted text-center">
                            Sorry, an error has occured, Requested page not found!
                        </span>

                        <div className="card-body mx-auto">
                       <Link className="btn bn-block mb-4 w-100 login__btn" to="/"> GO TO HOMEPAGE </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default PageNotFound