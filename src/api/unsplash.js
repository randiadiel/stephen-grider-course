import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vBSvBZiaMIWDlP6imArSBjev2PpIcN8NcYPAUn_xVW8",
  },
});
