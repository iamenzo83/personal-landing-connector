
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OldERPNextRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the new URL
    navigate("/erp/erpnext-italia", { replace: true });
  }, [navigate]);
  
  // This content won't be seen as the redirect happens immediately
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Reindirizzamento in corso...</p>
    </div>
  );
};

export default OldERPNextRedirect;
