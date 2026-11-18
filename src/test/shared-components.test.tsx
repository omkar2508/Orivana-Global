import { describe, expect, it, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

beforeAll(() => {
  // framer-motion's useInView needs IntersectionObserver, which jsdom lacks
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

describe("shared UI components", () => {
  it("PageHeader renders the title, highlight and subtitle, with a decorative image", () => {
    const { container } = render(
      <PageHeader image="/x.jpg" title="About" highlight="Orivana" subtitle="Who we are" />,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("About Orivana");
    expect(screen.getByText("Who we are")).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });

  it("Reveal renders its children", () => {
    render(
      <Reveal>
        <p>content</p>
      </Reveal>,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("CountUp leaves non-numeric values unchanged", () => {
    render(<CountUp value="2X-3X" />);
    expect(screen.getByText("2X-3X")).toBeInTheDocument();
  });
});
