import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-serif text-2xl italic text-pine">404</p>
      <h1 className="mt-3 text-4xl tracking-[-0.05em]">This page is not on the site.</h1>
      <p className="mt-4 max-w-lg text-pine">
        The address may be out of date. The six BTG pages are linked from the menu.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}
