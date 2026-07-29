"use client";

import Image from "next/image";

const airplaneAscii = String.raw`      %
     %%%%%%##**
        %*=-*%@@%*:--++**#
          ##+=--=*==+#=::--%                                @@
            %#*+==#+=-*=:..:=#                               #####%
             @@%%########**++*-::*                        %###+==+                                    @
                @@@%########%%%%%#-.=*                  %###+====                                 @@@@
                   @@@@%%##%%%%%%%%#+++::-=%          *###*==+===                             %@@@@@
                @@@@@@@@@@@%%%%%%%%@%#-::--...:=**++=+##=+*+=++=                          @%@@@@
                      @@@@@@     %@%#*==+=-::--..........:==++*%                    *%@@@@@@@@
                    @@##           @@%@%+===+=--:=::..........+    @           *#%%@@@@@@
                         %%##++     @@@@@%*+++++==:..::.::=:...::--+=  +*%##%%%@@@@@@@
                              @%#*+   @@@@@@%++++++++:::..:=.::::::=#%##%@@@@@@@@@
                                 ##*+=-+%@@@@@@#*+++++++-:::-+%@@%%%@@@@@@@@@@@%@@@
                                     @@@@@@@@@@@#:.......::+@@@@@@@@@@@@@@@%###%%%@@@
                                       @@@@%%##%+:........+**#@@@@@@@@@@@\*++**##%%%@@
                                     %@@@%=.::::-=---==-:-%%%=-::=+**##@%*--=+*##%%%@@
                        @%%%%@@%%%%%%%%@@@*:::::::===-==+++==*%@@@@@%%%%@%=:=+*##%%%@@
                              @@@@@@@%@@@@%***#++-:-==++****%@*=====++#@@#+++*###%%%@@
                                    @@@%%@@@%%#%##*###%#\*\*#@@%%@@@#*+=-=-:::=+##%%%@@
                                   @@%*+=-=%@@@@@@@@@@@@##@@@@@@@@@@@@@@%*-:...:+%@@
                                 @@%##**++ @@@@@@@@#===*@@@@@@@@@@@@@@    @@@%*+-.:--
                              @@@@%%%     @%%@@@@*===+#%@@@@@@@@@@@@@@           @@@%*+=:-
                          @@@@@@          #+%##*+*%%%%%@@@@@@      @                    @%+=-:-*
                       @@@@                         %###%                                    %##-:=
                                                                                                  @#-*+
                                                                                                       %@@`;

export function HeroVisual() {
  return (
    <div className="relative z-2 h-[min(65vw,670px)] min-h-[500px] overflow-hidden max-h-[68svh] max-md:h-[min(110vw,690px)] max-md:max-h-none max-sm:-mt-10 max-sm:h-[76vw] max-sm:min-h-[300px] max-sm:max-h-[340px]">
      <div className="absolute top-[12%] right-[3%] bottom-[8%] left-[3%] rounded-full border border-white/5 opacity-45 [background-image:radial-gradient(rgba(231,225,244,.35)_.75px,transparent_.75px)] [background-size:17px_17px] [mask-image:radial-gradient(circle,black,transparent_65%)]" aria-hidden="true" />
      <div className="absolute z-1 top-[8%] left-[6%] w-[85%] aspect-square rounded-full bg-[radial-gradient(circle_at_48%_42%,transparent_0_32%,rgba(112,71,255,.28)_32.5%,transparent_34%),radial-gradient(circle_at_50%_50%,rgba(49,26,103,.34),transparent_64%)]" aria-hidden="true" />
      <pre
        className="pointer-events-none absolute top-[11%] left-[-1%] z-2 m-0 font-mono text-[clamp(.16rem,.48vw,.48rem)] leading-[1.02] tracking-[-.04em] text-violet-light/45 mix-blend-screen max-md:top-[13%] max-md:left-[5%] max-sm:top-[15%] max-sm:left-[10%] max-sm:text-[.2rem]"
        aria-hidden="true"
      >
        {airplaneAscii}
      </pre>
      <div className="absolute top-1/2 right-[22%] z-3 w-[42%] -translate-y-1/2 max-md:left-1/2 max-md:right-auto max-md:w-[38%] max-md:-translate-x-1/2 max-sm:w-[48%]">
        <div className="relative aspect-square w-full overflow-hidden rounded-full border border-paper/30 shadow-[0_34px_90px_rgba(0,0,0,.46)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[linear-gradient(145deg,rgba(112,71,255,.2),transparent_46%)]">
          <Image
            src="/anthony-gonzalez-portrait.jpg"
            alt="Anthony Gonzalez"
            className="scale-[1.12] object-cover object-[center_28%]"
            fill
            sizes="(max-width: 680px) 48vw, (max-width: 900px) 38vw, 42vw"
            priority
          />
        </div>
        <p className="mt-3.5 mb-0 flex justify-between text-[.47rem] font-bold tracking-[.1em] text-[#8d849a]">
          <span>IMAGE / 01</span>
          ANTHONY GONZALEZ
        </p>
      </div>
      <div className="absolute top-[20%] -right-2 z-4 flex flex-col items-center gap-3 text-[.45rem] font-bold tracking-[.18em] text-[#84798f] [writing-mode:vertical-rl] max-sm:hidden" aria-hidden="true">
        <span>INTELLIGENCE</span>
        <i className="h-14 w-px bg-[linear-gradient(#7047ff,transparent)]" />
        <span>CRAFT</span>
      </div>
    </div>
  );
}
