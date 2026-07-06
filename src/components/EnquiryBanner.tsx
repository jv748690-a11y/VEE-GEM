import { buildGeneralEnquiryLink } from "../utils/whatsapp";

const GROUP_LINK = "https://chat.whatsapp.com/LtyVFu8QQkVDVjslXTc2BN";

export default function EnquiryBanner() {
  return (
    <section className="bg-champagne/10 border-y border-champagne/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 text-center">
        <h3 className="font-display text-2xl md:text-3xl text-onyx">
          This isn't everything we have.
        </h3>
        <p className="text-onyx/70 mt-3 max-w-lg mx-auto">
          Our full range is even bigger than what's shown here. Send us a message to ask about a
          specific piece, or join our group chat to see new arrivals first.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href={buildGeneralEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-onyx text-ivory px-7 py-3 rounded-full text-sm tracking-wide-lg uppercase hover:bg-onyx/85 transition-colors"
          >
            Send an enquiry
          </a>
          <a
            href={GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-onyx/25 px-7 py-3 rounded-full text-sm tracking-wide-lg uppercase hover:border-onyx transition-colors"
          >
            Join our group chat
          </a>
        </div>
      </div>
    </section>
  );
}
