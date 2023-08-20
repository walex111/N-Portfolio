const Footer = () => {
    return (
        <div className="">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h1 className="text-4xl font-bebas text-neutral-600 mb-10">
                    PROJECTS
                </h1>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block font-bebas text-xl mb-2 font-medium text-neutral-600">Company:</label>
                        <input type="email" id="email" class="shadow-sm font-oswald bg-neutral-600 border border-gray-300 text-neutral-600 rounded-lg block w-full p-2.5" placeholder="Enter Company Name..." required />
                    </div>
                    <div>
                        <label for="subject" class="block font-bebas text-xl mb-2 font-medium text-neutral-600">Email:</label>
                        <input type="text" id="subject" class="block p-3 w-full font-oswald text-neutral-600 bg-neutral-600 rounded-lg border border-gray-300 shadow-sm" placeholder="Enter Email..." required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block font-bebas text-xl mb-2 font-medium text-neutral-600">Message:</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full font-oswald text-neutral-600 bg-neutral-600 rounded-lg shadow-sm border border-gray-300" />
                    </div>
                    <button type="submit" class="py-3 px-5 text-xl font-bebas bg-neutral-600 font-medium text-center text-white rounded-lg sm:w-fit">Send message</button>
                </form>
            </div>
            <p className="text-center text-lg text-neutral-600 font-oswald">&copy; 2020 Samson Oketunmbi.</p>
        </div>
    )
}

export default Footer
