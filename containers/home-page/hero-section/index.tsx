export default function HeroSection() {
  return (
    <section className="flex flex-col gap-4 py-5 transition-all ease-in-out">
      <h2 className="text-3xl transition-all ease-in-out">About Me</h2>

      <p className="text-base-text-weak transition-all ease-in-out">
        Experienced Full-Stack Developer specializing in crafting robust,
        scalable web and mobile applications. Proficient in PHP frameworks like
        Laravel and CodeIgniter, with a solid foundation in WordPress and
        Flutter. <br />
        Seeking remote sidejob/freelance opportunities to leverage my expertise
        and deliver innovative solutions that exceed client expectations.
      </p>

      <a
        href="https://drive.google.com/open?id=1uphZ6TIpvqN6zi3FWzeQ5VN33fw_-skv&usp=drive_fs"
        target="_blank"
        className="underline transition-all ease-in-out"
      >
        Download Resume
      </a>
    </section>
  );
}
