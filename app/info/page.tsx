export default function infoPage() {
    return (
        <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Access Information</h1>
            <div className="columns-2 flex items-center justify-center px-2 py-8 text-center">
            <p className="mb-8 max-w-150 text-primary sm:text-base text-left">
                This site is an internal resource for members of ASEC, not intended for public access, and therefore secured with an access code. <b>If you aren't a member of ASEC</b>, you won't be able to access the content on this site. You're probably looking for our public site, which can be found at <a href="https://asec.crd.co" className="text-blue-500 hover:text-blue-700">https://asec.crd.co</a>.
                <br />
                <br />
                <b>If you are a member of ASEC</b> and you lost the access code provided to you at the start of the term, please contact the Secretary to regenerate your access code. If you believe your access code has been compromised, please contact the Secretary immediately to have it regenerated.
                <br />
                <br />
                Your session starts when you input your access code and lasts for 1 hour. After that, you'll need to input the access code again to continue accessing the site.
            </p>
            </div>
        </section>
    )
}