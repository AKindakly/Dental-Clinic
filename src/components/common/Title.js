import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const Title = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <Container fluid className="bg-primary text-white bg-gradient py-5">
            <div className="d-flex justify-content-around align-items-center">
                <div className="fs-1">
                    <span>
                        {pathname === "/about" && <span>About</span>}
                        {pathname === "/services" && <span>Services</span>}
                        {pathname === "/contact" && <span>Contact</span>}
                    </span>
                </div>
                <div className="fs-5">
                    <Link className="text-decoration-none text-reset" href="/">
                        Home&nbsp;
                    </Link>
                    <span>{pathname}</span>
                </div>
            </div>
        </Container>
    );
};

export default Title;
