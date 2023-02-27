import { Toast } from "react-bootstrap";

const Notification = ({showNotification, setShowNotification, notificationContent}) => {
    return(
        <>
         <Toast onClose={() => setShowNotification(false)} show={showNotification} delay={8000} autohide bg="light"
         style={{position: "absolute", right: "4px", top: "4px", zIndex: "99"}}>
          <Toast.Header>
           
            <strong className="me-auto">The Vocation</strong>
            {/* <small>just now</small> */}
          </Toast.Header>
          <Toast.Body>{notificationContent}</Toast.Body>
        </Toast>
        </>
    )
}

export default Notification