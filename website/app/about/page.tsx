import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Business Technologies Guelph is a student-led organization at the University of Guelph bridging business and emerging technology.",
};

const goals = [
  {
    title: "Bridge the two fields",
    body: "BTG exists so business and technology are studied as one problem, not two clubs that never meet.",
  },
  {
    title: "Make the exposure practical",
    body: "Students should leave a BTG program having worked with the tools and decisions that show up in industry, not only having heard about them.",
  },
  {
    title: "Open the room",
    body: "The organization connects students with professionals and companies through events, mentorship, and partnerships.",
  },
  {
    title: "Keep the adoption responsible",
    body: "Emerging technology is treated as something to integrate carefully — ethical, useful, and aware of its impact at work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BTG"
        title="Student-led, between business and technology."
        lede="Business Technologies Guelph is a student organization at the University of Guelph. It helps students gain practical exposure to emerging technologies and meet the people already using them."
      />

      <section className="bg-cream">
        <Container className="grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <p className="font-serif text-4xl italic leading-tight tracking-normal text-ink md:text-5xl lg:col-span-6">
            Prepare students before they graduate — with real problems, real professionals, and real decisions.
          </p>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-lg leading-relaxed text-pine">
              That is the mission BTG states for itself: a campus hub where
              future-focused students learn the technologies shaping modern
              business, and where those technologies are taken up with care.
            </p>
            <p className="mt-5 leading-relaxed text-pine">
              The club is not a lecture series parked next to a tech demo. It is
              a place for students who want both the commercial question and the
              technical one, and who want industry in the conversation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <p className="font-serif text-2xl italic text-pine">What the club works toward</p>
          <h2 className="mt-3 max-w-xl text-4xl tracking-[-0.05em]">Four aims, one organization</h2>
          <ol className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2">
            {goals.map((goal, index) => (
              <li key={goal.title} className="bg-paper p-6 md:p-8">
                <p className="font-serif text-3xl italic text-sage">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl tracking-[-0.04em]">{goal.title}</h3>
                <p className="mt-3 leading-relaxed text-pine">{goal.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl italic text-pine">Background</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em]">How BTG showed up</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-pine lg:col-span-8">
            <p>
              BTG is organized by students at the University of Guelph. Its public
              debut was the Smarter Than AI Panel on March 3, 2026: 60+ attendees
              and four industry panelists, talking about how technology and AI are
              reshaping work.
            </p>
            <p>
              The year continues in the same direction. Industry Decoded brings a
              company into the room. The charity 5K is a community event with the
              Canadian Cancer Society. Prompt & Pitch, on November 21, is the
              flagship case competition — teams find a business problem, build a
              working prototype with AI-assisted development, and pitch it.
            </p>
            <p>
              Partnerships are part of the model. Companies can sponsor the club,
              back an event, or co-design a workshop. The point is mutual: students
              get access to practice and people; partners get a serious audience
              on campus.
            </p>
          </div>
        </Container>
      </section>

      <section className="on-ink bg-ink text-cream">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <h2 className="text-3xl tracking-[-0.05em] md:text-4xl">See the work, or join it.</h2>
            <p className="mt-3 max-w-lg text-cream/75">
              The calendar lists what is confirmed. Companies start with Corporate Relations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/events" variant="inverse">
              View events
            </ButtonLink>
            <ButtonLink href="/partner" variant="inverseQuiet">
              Partner With Us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
