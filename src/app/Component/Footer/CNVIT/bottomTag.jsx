import "./BottomDetails.css";
import Image from "next/image";
import Link from "next/link";

function BottomDetails({ lastLogo }) {
  const logoSrc = lastLogo || ""; // Assuming lastLogo is an object with a property 'lastLogo'

  return (
    <div className="bottom-details  bg-neutral">
      <div className="bottom_text">
        <span className="copyright_text">
          Copyright &#169; 2024{" "}
          <Link href="/" style={{ color: "#fff" }}>
            CNVMONEY.
          </Link>
          All rights reserved
        </span>

        <span className="designed-developed">
          <p>Designed & Developed by &nbsp;&nbsp;</p>
          <Link href="/">
            {logoSrc ? (
              <Image src={logoSrc} alt="CNViT Logo" width={75} height={150} />
            ) : (
              <Image
                src="/cnvit.png"
                alt="CNViT Logo"
                width={75}
                height={150}
              />
            )}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default BottomDetails;
