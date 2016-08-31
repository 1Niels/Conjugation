# Conjugation

This website is intended to be used for conjugation practice when learning new languages. Simply follow the usage instuctions to practice any list of words.

The website is currently running at [http://www.nielsterwiesch.com/Conjugation/](http://www.nielsterwiesch.com/Conjugation/)
## Usage

- Download or fork the repositoray 
- Open the Conjugation.js file 
- Locate the /* Add verbs Here */ section of the script, it starts with:
```
/* Add verbs Here */
newVerb("andar","ando", "andas", "anda", "andamos", "andáis", "andan");
newVerb("bailar", "bailo", "bailas", "baila", "bailamos", "bailáis", "bailan");
newVerb("borrar", "borro", "borras", "borra", "borramos", "boráis", "borran"); 
```
- To add new verbs use newVerb() function:

```newVerb([infinitive],[I],[You],[He/She/Formal],[We],[You pl.],[You pl. polite/they m/f.])```

- example of the infinitive "to love" in Spanish, Italian, and French

``` 
newVerb("amar", "amo", "amas", "ama", "amamos", "amáis", "aman");
newVerb("amare", "amo", "ami", "ama", "amiamo", "amate", "amano");
newVerb("aimer", "aime", "aimes", "aime", "aimons", "aimez", "aiment");
```

## Contributing
- Contributions of all forms are greatly appreciated, especially possible spelling errors in verbs
- To contribute fork the repositoray and make a pull request with your contribution
- Thank you.
