import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const FloatingButtons = ({ cartOpen, setCartOpen }) => {
  return (
    <div className="floating-btns">
      <div className="chat">
        <ChatBubbleIcon style={{ fontSize: "2rem" }} />
      </div>

      {!cartOpen && (
        <div className="float-cart">
          <ShoppingCartIcon style={{ fontSize: "1.5rem" }} />
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;
