(function ($) {
    $.fn.temporizador =  function (params) {
        const finalOptions = $.extend({
            message: 'Coming soon...',
            time: '22:00:00'
        }, params)

        const hourTens = $('<span class="digito">').html('0')
        const hourUnit = $('<span class="digito">').html('0')
        const minuteTens = $('<span class="digito">').html('0')
        const minuteUnit = $('<span class="digito">').html('0')
        const secondTens = $('<span class="digito">').html('0')
        const secondUnit = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const message = $('<div class="mensagem">').html(finalOptions.message)

        $(this).addClass('temporizador')
        $(this).append(
            hourTens, 
            hourUnit,
            separadorHora,
            minuteTens, 
            minuteUnit,
            separadorMinuto, 
            secondTens, 
            secondUnit,
            message
            )

            const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
            const horarioAlvo = regex.exec(finalOptions.time)
            console.log(horarioAlvo)

            let temporizador = setInterval(() => {
                const agora = new Date()
                const alvo = new Date()

                alvo.setHours(horarioAlvo[1])
                alvo.setMinutes(horarioAlvo[2])
                alvo.setSeconds(horarioAlvo[3])

                const diferenaEmMil = alvo.getTime() - agora.getTime()
                //console.log(`dif → ${ diferenaEmMil }`)
                if (diferenaEmMil >= 0) {
                    const diff = regex.exec(new Date(diferenaEmMil).toISOString())
                    // console.log(`diff% → ${ diff }`)

                    hourTens.html(diff[1][0])
                    hourUnit.html(diff[1][1])
                    minuteTens.html(diff[2][0])
                    minuteUnit.html(diff[2][1])
                    secondTens.html(diff[3][0])
                    secondUnit.html(diff[3][1])
                } else clearInterval(temporizador)
            }, 1000)

        return this
    }
})(jQuery)