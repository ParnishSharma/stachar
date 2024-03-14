import { motion } from "framer-motion";
import i18n from "i18next";
import React, { useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaFileAlt,
  FaMapMarkerAlt,
  FaRegIdCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Homepage.css";

const resources = {
  en: {
    translation: {
      whyKYC: {
        title: "Why KYC?",
        description:
          "KYC (Know Your Customer) is important for businesses to verify the identity of their customers and comply with regulatory requirements. It helps prevent fraud, money laundering, and other illegal activities.",
      },
      howToDoKYC: {
        title: "How to Do KYC?",
        description:
          "To complete KYC, customers need to provide certain documents and information to verify their identity. This usually includes government-issued ID cards, proof of address, and sometimes additional documentation depending on the requirements of the business.",
      },
      documentsNeeded: {
        title: "Documents Needed for KYC",
        description:
          "Common documents needed for KYC include:\n- Government-issued ID card (e.g., passport, driver's license)\n- Proof of address (e.g., utility bill, bank statement)\n- Additional documentation as required by the business (e.g., tax identification number)",
      },
    },
  },
  zh: {
    translation: {
      whyKYC: {
        title: "为什么需要 KYC？",
        description:
          "KYC（了解您的客户）对于企业验证客户身份并符合监管要求至关重要。它有助于防止欺诈、洗钱和其他非法活动。",
      },
      howToDoKYC: {
        title: "如何进行 KYC？",
        description:
          "要完成 KYC，客户需要提供特定的文件和信息来验证其身份。这通常包括政府发行的身份证、地址证明以及根据企业要求可能需要的其他文件。",
      },
      documentsNeeded: {
        title: "KYC 所需文件",
        description:
          "KYC 所需的常见文件包括：\n- 政府发行的身份证（例如，护照、驾驶证）\n- 地址证明（例如，水电费单据、银行对账单）\n- 根据企业要求可能需要的其他文件（例如，纳税识别号）",
      },
    },
  },
  es: {
    translation: {
      whyKYC: {
        title: "¿Por qué KYC?",
        description:
          "KYC (Conozca a su cliente) es importante para que las empresas verifiquen la identidad de sus clientes y cumplan con los requisitos regulatorios. Ayuda a prevenir el fraude, el lavado de dinero y otras actividades ilegales.",
      },
      howToDoKYC: {
        title: "¿Cómo hacer KYC?",
        description:
          "Para completar KYC, los clientes deben proporcionar ciertos documentos e información para verificar su identidad. Esto generalmente incluye tarjetas de identificación emitidas por el gobierno, comprobantes de domicilio y a veces documentación adicional dependiendo de los requisitos del negocio.",
      },
      documentsNeeded: {
        title: "Documentos necesarios para KYC",
        description:
          "Los documentos comunes necesarios para KYC incluyen:\n- Tarjeta de identificación emitida por el gobierno (por ejemplo, pasaporte, licencia de conducir)\n- Comprobante de domicilio (por ejemplo, factura de servicios públicos, estado de cuenta bancaria)\n- Documentación adicional según lo requerido por el negocio (por ejemplo, número de identificación fiscal)",
      },
    },
  },
  hi: {
    translation: {
      whyKYC: {
        title: "क्यों KYC?",
        description:
          "KYC (अपने ग्राहक को जानें) व्यापारों के लिए महत्वपूर्ण है ताकि वे अपने ग्राहकों की पहचान सत्यापित कर सकें और नियामक आवश्यकताओं का पालन कर सकें। यह धोखाधड़ी, पैसे का धुलाई और अन्य अवैध गतिविधियों को रोकने में मदद करता है।",
      },
      howToDoKYC: {
        title: "KYC कैसे करें?",
        description:
          "KYC पूरा करने के लिए, ग्राहकों को अपनी पहचान सत्यापित करने के लिए कुछ दस्तावेज और जानकारी प्रदान करनी होती है। यह आमतौर पर सरकार द्वारा जारी की गई आईडी कार्ड, पते का सबूत शामिल करता है, और कभी-कभी व्यवसाय की आवश्यकताओं पर निर्भर करता है।",
      },
      documentsNeeded: {
        title: "KYC के लिए आवश्यक दस्तावेज़",
        description:
          "KYC के लिए आम दस्तावेज़ शामिल हैं:\n- सरकार द्वारा जारी की गई पहचान पत्र (जैसे, पासपोर्ट, ड्राइविंग लाइसेंस)\n- पते का सबूत (जैसे, यूटिलिटी बिल, बैंक स्टेटमेंट)\n- व्यवसाय की आवश्यकताओं के अनुसार अतिरिक्त दस्तावेज़ (जैसे, कर पहचान संख्या)",
      },
    },
  },
  id: {
    translation: {
      whyKYC: {
        title: "Mengapa KYC?",
        description:
          "KYC (Kenal Customer Anda) penting bagi bisnis untuk memverifikasi identitas pelanggan mereka dan mematuhi persyaratan regulasi. Ini membantu mencegah penipuan, pencucian uang, dan kegiatan ilegal lainnya.",
      },
      howToDoKYC: {
        title: "Bagaimana Melakukan KYC?",
        description:
          "Untuk menyelesaikan KYC, pelanggan perlu memberikan dokumen dan informasi tertentu untuk memverifikasi identitas mereka. Ini biasanya termasuk kartu identitas yang diterbitkan pemerintah, bukti alamat, dan kadang-kadang dokumen tambahan tergantung pada persyaratan bisnis.",
      },
      documentsNeeded: {
        title: "Dokumen yang Diperlukan untuk KYC",
        description:
          "Dokumen umum yang diperlukan untuk KYC termasuk:\n- Kartu identitas yang diterbitkan pemerintah (misalnya, paspor, SIM)\n- Bukti alamat (misalnya, tagihan utilitas, rekening bank)\n- Dokumen tambahan sesuai kebutuhan bisnis (misalnya, nomor identifikasi pajak)",
      },
    },
  },
  pt: {
    translation: {
      whyKYC: {
        title: "Por que KYC?",
        description:
          "KYC (Conheça o Seu Cliente) é importante para as empresas verificarem a identidade de seus clientes e cumprirem com os requisitos regulatórios. Isso ajuda a evitar fraudes, lavagem de dinheiro e outras atividades ilegais.",
      },
      howToDoKYC: {
        title: "Como fazer KYC?",
        description:
          "Para completar o KYC, os clientes precisam fornecer certos documentos e informações para verificar sua identidade. Isso geralmente inclui cartões de identificação emitidos pelo governo, comprovante de endereço e, às vezes, documentação adicional dependendo dos requisitos do negócio.",
      },
      documentsNeeded: {
        title: "Documentos Necessários para KYC",
        description:
          "Documentos comuns necessários para KYC incluem:\n- Cartão de identificação emitido pelo governo (por exemplo, passaporte, carteira de motorista)\n- Comprovante de endereço (por exemplo, conta de luz, extrato bancário)\n- Documentação adicional conforme exigido pelo negócio (por exemplo, número de identificação fiscal)",
      },
    },
  },
  fr: {
    translation: {
      whyKYC: {
        title: "Pourquoi KYC ?",
        description:
          "KYC (Know Your Customer) est important pour les entreprises afin de vérifier l'identité de leurs clients et de se conformer aux exigences réglementaires. Cela aide à prévenir la fraude, le blanchiment d'argent et d'autres activités illégales.",
      },
      howToDoKYC: {
        title: "Comment faire KYC ?",
        description:
          "Pour compléter KYC, les clients doivent fournir certains documents et informations pour vérifier leur identité. Cela inclut généralement des cartes d'identité émises par le gouvernement, des justificatifs de domicile et parfois des documents supplémentaires en fonction des exigences de l'entreprise.",
      },
      documentsNeeded: {
        title: "Documents Nécessaires pour KYC",
        description:
          "Les documents couramment nécessaires pour KYC incluent :\n- Carte d'identité émise par le gouvernement (par exemple, passeport, permis de conduire)\n- Justificatif de domicile (par exemple, facture d'utilité, relevé bancaire)\n- Documentation supplémentaire selon les besoins de l'entreprise (par exemple, numéro d'identification fiscale)",
      },
    },
  },
  ja: {
    translation: {
      whyKYC: {
        title: "なぜKYC？",
        description:
          "KYC（顧客の身元確認）は、企業が顧客の身元を確認し、規制要件を満たすために重要です。これにより、詐欺、マネーロンダリング、その他の違法な活動を防ぐのに役立ちます。",
      },
      howToDoKYC: {
        title: "KYCの方法？",
        description:
          "KYCを完了するには、顧客が自分の身元を確認するために特定の文書や情報を提供する必要があります。これには、政府発行のIDカード、住所の証明、ビジネスの要件に応じて追加の文書が必要な場合があります。",
      },
      documentsNeeded: {
        title: "KYCに必要な書類",
        description:
          "KYCに必要な一般的な書類には次のものがあります：\n- 政府が発行したIDカード（例：パスポート、運転免許証）\n- 住所の証明（例：公共料金の請求書、銀行の明細書）\n- ビジネスの要件に応じて追加の書類（例：納税者番号）",
      },
    },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const Home = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div style={styles.container}>
      <h4 style={styles.h4}>Select language </h4>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="id">Indonesian/Malaysian</option>
        <option value="pt">Portuguese</option>
        <option value="fr">French</option>
        <option value="ja">Japanese</option>
      </select>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.title}>
          <FaRegIdCard style={styles.icon} /> {t("whyKYC.title")}
        </h2>
        <p style={styles.description}>{t("whyKYC.description")}</p>
      </motion.div>

      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 style={styles.title}>
          <FaMapMarkerAlt style={styles.icon} /> {t("howToDoKYC.title")}
        </h2>
        <p style={styles.description}>{t("howToDoKYC.description")}</p>
      </motion.div>

      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 style={styles.title}>
          <FaFileAlt style={styles.icon} /> {t("documentsNeeded.title")}
        </h2>
        <p style={styles.description}>{t("documentsNeeded.description")}</p>
      </motion.div>
      <Link to="/form">
        <button style={styles.button}>Continue</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    position: "relative",
    backgroundColor: "#095db8",
  },
  h4: {
    padding: "10px",
    borderRadius: "5px",
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  description: {
    fontSize: "1.2rem",
    backgroundColor: "007BFF",
  },
  icon: {
    marginRight: "10px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "20px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Home;
