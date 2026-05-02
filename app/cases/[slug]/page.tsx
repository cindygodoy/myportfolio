import { notFound } from "next/navigation";
import { getCaseBySlug, getOtherCases, cases } from "@/data/cases";
import CaseDetailClient from "./CaseDetailClient";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseData = getCaseBySlug(params.slug);
  if (!caseData) notFound();
  const otherCases = getOtherCases(params.slug);
  return <CaseDetailClient caseData={caseData} otherCases={otherCases} />;
}
