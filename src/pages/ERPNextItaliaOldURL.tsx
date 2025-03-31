
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ERPNextItaliaOldURL = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the new URL with a small delay to ensure Helmet has time to apply
    const timeout = setTimeout(() => {
      navigate("/erp/erpnext-italia", { replace: true });
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>ERPNext Italia - Implementazione e Consulenza | Reindirizzamento</title>
        <meta name="description" content="ERPNext Italia: Implementazione, consulenza e supporto per ERPNext in Italia. Fatturazione elettronica, contabilità e adattamenti per la normativa italiana." />
        <meta name="keywords" content="ERPNext Italia, ERPNext Italiano, Consulenza ERPNext, ERP Open Source, Gestionale Open Source, Fatturazione Elettronica" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://carlettini.org/erp/erpnext-italia" />
      </Helmet>
      <p>Reindirizzamento in corso...</p>
    </div>
  );
};

export default ERPNextItaliaOldURL;
