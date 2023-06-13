

### TODO
- [x] Styles board/tails/words stack
- [] DND https://dndkit.com

----

# Пример игры на гитхабе

> 1) https://github.com/contragents/erudit.club
> 2) https://github.com/Nikolai2038/erudite
> 3) калькулятор хода https://github.com/tit/erudite/blob/master/public/javascript/calculator.js
> 4) проверки https://github.com/Nikolai2038/erudite/blob/master/Erudite/Erudite/FormGame.cs
> 5) слова https://github.com/RiordanFols/scrabble_assistant/blob/master/resources/dictionaries/word_rus.txt
> 6) статья https://habr.com/ru/articles/191432/

---
### Refs
> ICONS https://tabler-icons.io

> RULES https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D1%80%D1%8D%D0%B1%D0%B1%D0%BB

---
### Словарь
- tiles - фишки
- playerHand - буквы на руках
- tileStack - мешок с буквами
- drawTile - вытянуть букву
- shuffle - перемешать
- turn - ход
- score - счет
- rack - хранилище букв
- bonus squares - бонусные клетки
- dictionary - словарь
- start - начать игру
- end - конец игры


# Словари

> Словари от Яндекс
 
> #1 https://yandex.ru/dev/dictionary/doc/dg/reference/getLangs.html

> #2 https://yandex.ru/dev/dictionary/doc/dg/reference/lookup.html

----

> пример запроса в вики дата

```https://query.wikidata.org/sparql?query=%0A++SELECT+%3Fitem+%3FitemLabel+%3Fdescription+WHERE+{%0A++++%3Fitem+rdfs%3Alabel+%22%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%D0%B0%22%40ru+.%0A++++OPTIONAL+{+%3Fitem+schema%3Adescription+%3Fdescription+FILTER(LANG(%3Fdescription)+%3D+%22ru%22)+}%0A++++SERVICE+wikibase%3Alabel+{+bd%3AserviceParam+wikibase%3Alanguage+%22[AUTO_LANGUAGE]%2Cru%22.+}%0A++}%0A&format=json```

> результат
```json
{
  "head" : {
    "vars" : [ "item", "itemLabel", "description" ]
  },
  "results" : {
    "bindings" : [ {
      "item" : {
        "type" : "uri",
        "value" : "http://www.wikidata.org/entity/Q11748378"
      },
      "description" : {
        "xml:lang" : "ru",
        "type" : "literal",
        "value" : "самка быка"
      },
      "itemLabel" : {
        "xml:lang" : "ru",
        "type" : "literal",
        "value" : "корова"
      }
    } ]
  }
}
```