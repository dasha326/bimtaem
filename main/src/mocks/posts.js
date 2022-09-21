export default [
    {
        id: '1',
        category: 'NAVISWORKS',
        date: '29.04.2021',
        title: 'Настройки параметров экспорта из Revit в Navisworks',
        text: '<p>Для того, чтобы экспортировать модель в Navisworks, перейдем на вкладку «Надстройки», с помощью кнопки «Внешние инструменты» выберем интересующий нас пункт.</p>\n' +
            '<img class="alignnone size-full wp-image-571" src="https://bimteam.org/wp-content/uploads/2021/03/image9.png" alt="" width="968" height="222" srcset="https://bimteam.org/wp-content/uploads/2021/03/image9.png 968w, https://bimteam.org/wp-content/uploads/2021/03/image9-300x69.png 300w, https://bimteam.org/wp-content/uploads/2021/03/image9-768x176.png 768w" sizes="(max-width: 968px) 100vw, 968px">\n' +
            '<p></p>\n' +
            '<p>Получить корректный для определённых целей экспорт нам помогут «Настройки Navisworks», которые мы выбираем в появившемся окне «Экспорт сцены».</p>\n' +
            '<p></p>\n' +
            '<img class="alignnone size-full wp-image-577" src="https://bimteam.org/wp-content/uploads/2021/03/image10.png" alt="" width="581" height="489" srcset="https://bimteam.org/wp-content/uploads/2021/03/image10.png 581w, https://bimteam.org/wp-content/uploads/2021/03/image10-300x252.png 300w" sizes="(max-width: 581px) 100vw, 581px">\n' +
            '<p></p>\n' +
            '<p>Получаем окно «Navisworks Редактор параметров», каждый пункт которого мы подробно рассмотрим:</p>\n' +
            '<img class="alignnone size-full wp-image-579" src="https://bimteam.org/wp-content/uploads/2021/03/image11.png" alt="" width="903" height="548" srcset="https://bimteam.org/wp-content/uploads/2021/03/image11.png 903w, https://bimteam.org/wp-content/uploads/2021/03/image11-300x182.png 300w, https://bimteam.org/wp-content/uploads/2021/03/image11-768x466.png 768w" sizes="(max-width: 903px) 100vw, 903px">\n' +
            '<p></p>\n' +
            '<p></p>\n' +
            '<p><strong>1. Конвертировать идентификаторы объектов</strong> — в модель Navis попадают уникальные номера каждого объекта (ID), присвоенные Revit, которые облегчают координацию.<br>\n' +
            'Если галочка не стоит:<br>\n' +
            'В панели «Свойства» не появляется вкладка ID объекта:<br></p>\n' +
            '<img class="alignnone size-full wp-image-580" src="https://bimteam.org/wp-content/uploads/2021/03/01_безID.png" alt="" width="512" height="33" srcset="https://bimteam.org/wp-content/uploads/2021/03/01_безID.png 512w, https://bimteam.org/wp-content/uploads/2021/03/01_безID-300x19.png 300w" sizes="(max-width: 512px) 100vw, 512px">\n' +
            '\n' +
            '&nbsp;\n' +
            '<p></p>\n' +
            '<p>Если галочка стоит:<br></p>\n' +
            '<p>\n' +
            '<img class="alignnone size-full wp-image-581" src="https://bimteam.org/wp-content/uploads/2021/03/01_сID.png" alt="" width="512" height="64" srcset="https://bimteam.org/wp-content/uploads/2021/03/01_сID.png 512w, https://bimteam.org/wp-content/uploads/2021/03/01_сID-300x38.png 300w" sizes="(max-width: 512px) 100vw, 512px"><br></p>\n' +
            'Эта функция <strong>НЕ</strong> влияет на наличие параметра ID на вкладке Объект, если включена функция конвертирования параметра объектов из п.2.<br><p></p>\n' +
            '\n' +
            '&nbsp;\n' +
            '\n' +
            '<p><strong>2. Конвертировать параметры объектов.<br>\n' +
            '\n' +
            'а. Нет.</strong><br>\n' +
            '<span style="font-weight: 400;">На панели «Свойства» не отображается вкладка «Объект» с перечнем свойств параметров из Revit.</span><br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/002_Нет.png" alt="" width="904" height="61" class="alignnone size-full wp-image-601" srcset="https://bimteam.org/wp-content/uploads/2021/03/002_Нет.png 904w, https://bimteam.org/wp-content/uploads/2021/03/002_Нет-300x20.png 300w, https://bimteam.org/wp-content/uploads/2021/03/002_Нет-768x52.png 768w" sizes="(max-width: 904px) 100vw, 904px"></p>\n' +
            '<p><strong>b. Объекты.</strong><br>\n' +
            'На панели появляется вкладка «Объект».</p>\n' +
            '<p><img src="https://bimteam.org/wp-content/uploads/2021/03/002_Объекты.png" alt="" width="906" height="61" class="alignnone size-full wp-image-604" srcset="https://bimteam.org/wp-content/uploads/2021/03/002_Объекты.png 906w, https://bimteam.org/wp-content/uploads/2021/03/002_Объекты-300x20.png 300w, https://bimteam.org/wp-content/uploads/2021/03/002_Объекты-768x52.png 768w" sizes="(max-width: 906px) 100vw, 906px"><br>\n' +
            '<strong>c. Все.</strong><br>\n' +
            'На панели «Свойства» появляются дополнительные вкладки с различными свойствами элементов.<br></p>\n' +
            '<p></p>\n' +
            '<p><img src="https://bimteam.org/wp-content/uploads/2021/03/003_Все.png" alt="" width="988" height="60" class="alignnone size-full wp-image-606" srcset="https://bimteam.org/wp-content/uploads/2021/03/003_Все.png 988w, https://bimteam.org/wp-content/uploads/2021/03/003_Все-300x18.png 300w, https://bimteam.org/wp-content/uploads/2021/03/003_Все-768x47.png 768w" sizes="(max-width: 988px) 100vw, 988px"></p>\n' +
            '<p></p>\n' +
            '<p><strong>3. Координаты.<br>\n' +
            'a. Внутренние</strong> — cовмещение моделей происходит по исходному положению базовой точки.<br></p>\n' +
            '<p></p>\n' +
            '<strong>b. Общие</strong> — cовмещение моделей происходит относительно точки съемки.<br><p></p>\n' +
            '<p>На площадке существуют два здания, которые в Navisworks мы планируем увидеть следующим образом:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/ДваДома.png" alt="" width="859" height="456" class="alignnone size-full wp-image-725" srcset="https://bimteam.org/wp-content/uploads/2021/04/ДваДома.png 859w, https://bimteam.org/wp-content/uploads/2021/04/ДваДома-300x159.png 300w, https://bimteam.org/wp-content/uploads/2021/04/ДваДома-768x408.png 768w" sizes="(max-width: 859px) 100vw, 859px"><br>\n' +
            '<br>\n' +
            'В каждом из проектов базовая точка настроена в пересечениях осей 1 и А с корректными значениями.<br>\n' +
            '<br>\n' +
            '<a href="https://bimteam.org/wp-content/uploads/2021/04/Дом1_Ревит.png" class="fancybox image"><img src="https://bimteam.org/wp-content/uploads/2021/04/Дом1_Ревит-300x289.png" alt="" width="300" height="289" class="alignnone size-medium wp-image-726" srcset="https://bimteam.org/wp-content/uploads/2021/04/Дом1_Ревит-300x289.png 300w, https://bimteam.org/wp-content/uploads/2021/04/Дом1_Ревит-768x741.png 768w, https://bimteam.org/wp-content/uploads/2021/04/Дом1_Ревит.png 841w" sizes="(max-width: 300px) 100vw, 300px"></a><a href="https://bimteam.org/wp-content/uploads/2021/04/Дом2_Ревит.png" class="fancybox image"><img src="https://bimteam.org/wp-content/uploads/2021/04/Дом2_Ревит-300x175.png" alt="" width="300" height="175" class="alignnone size-medium wp-image-727" srcset="https://bimteam.org/wp-content/uploads/2021/04/Дом2_Ревит-300x175.png 300w, https://bimteam.org/wp-content/uploads/2021/04/Дом2_Ревит.png 570w" sizes="(max-width: 300px) 100vw, 300px"></a><br>\n' +
            '<br>\n' +
            'Результат при выгрузке по внутренним координатам:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Внутр.png" alt="" width="1236" height="491" class="alignnone size-full wp-image-728" srcset="https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Внутр.png 1236w, https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Внутр-300x119.png 300w, https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Внутр-768x305.png 768w, https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Внутр-1024x407.png 1024w" sizes="(max-width: 1236px) 100vw, 1236px"><br>\n' +
            '<br>\n' +
            'Здания совместились по Базовым точкам.<br>\n' +
            '<br>\n' +
            'Результат при выгрузке по общим координатам:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Общ.png" alt="" width="1070" height="323" class="alignnone size-full wp-image-729" srcset="https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Общ.png 1070w, https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Общ-300x91.png 300w, https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Общ-768x232.png 768w, https://bimteam.org/wp-content/uploads/2021/04/НеОбщ_Общ-1024x309.png 1024w" sizes="(max-width: 1070px) 100vw, 1070px"><br>\n' +
            '<br>\n' +
            'Здания спозиционировались относительно точки съемки.<br>\n' +
            '<br>\n' +
            'Можно сделать вывод, что Внутренние координаты используются в том случае, если работа происходит с одним зданием, наполненным разными системами. Если объект представляет собой несколько площадок с различными сетками осей, предпочтительно настраивать общую площадку внутри Revit и пользоваться выгрузкой по Общим координатам.<br> \n' +
            '<br>\n' +
            '<strong>ВАЖНО:</strong> При настройке базовой точки убедитесь, что она находится в исходном положении. (ПКМ по базовой точке)<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/ИсходноеПоложение.png" alt="" width="339" height="472" class="alignnone size-full wp-image-730" srcset="https://bimteam.org/wp-content/uploads/2021/04/ИсходноеПоложение.png 339w, https://bimteam.org/wp-content/uploads/2021/04/ИсходноеПоложение-215x300.png 215w" sizes="(max-width: 339px) 100vw, 339px"><br>\n' +
            '<br>\n' +
            'Если после нажатия базовая точка улетает, значит она была перемещена физически, а не вводом координат в параметры базовой точки. Координация в Navisworks происходит именно по исходному положению базовой точки.<br>\n' +
            '</p>\n' +
            '\n' +
            '<p></p>\n' +
            '<p><strong>4. Коэффициент фасетизации </strong>—  коэффициент для преобразования поверхностей в полигоны. При установке коэффициента «1» результатом будет таков:  1 сторона = 1 грани.<br></p>\n' +
            'Коэффициент меньше 1:&emsp;&emsp;&emsp;Коэффициент равно 1:&emsp;&emsp;&emsp;Коэффициент больше 1: <br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/02_ФасетМеньше1_200х200.gif" alt="" width="200" height="198" class="alignnone size-full wp-image-692"><img src="https://bimteam.org/wp-content/uploads/2021/03/02_ФасетРавно1_200х200.gif" alt="" width="200" height="198" class="alignnone size-full wp-image-693"><img src="https://bimteam.org/wp-content/uploads/2021/03/02_ФасетБольше1_200х200.gif" alt="" width="200" height="198" class="alignnone size-full wp-image-694">\n' +
            '<p><strong>5. Преобразовать URL-адреса</strong> – позволяет просмотреть ссылки, указанные в параметрах объектов.</p>\n' +
            'Если галочка стоит, появляется вкладка «Гиперссылки»:<br>\n' +
            '<p></p>\n' +
            '<p><img src="https://bimteam.org/wp-content/uploads/2021/03/005_Гиперссылки.png" alt="" width="512" height="34" class="alignnone size-full wp-image-611" srcset="https://bimteam.org/wp-content/uploads/2021/03/005_Гиперссылки.png 512w, https://bimteam.org/wp-content/uploads/2021/03/005_Гиперссылки-300x20.png 300w" sizes="(max-width: 512px) 100vw, 512px"><br>\n' +
            '</p><p></p>\n' +
            'Во вкладке Объект параметры с гиперссылками не появляются независимо от настроек.<p></p>\n' +
            '<p></p>\n' +
            '<p><strong>6. Преобразовать источники света</strong> — в Navisworks выгружаются источники света, которые были в проекте Revit. Наглядно это видно в окне визуализации:<br>\n' +
            'Если галочка не стоит:<br> \n' +
            'В окне “Autodesk Rendering” во вкладке “Освещение” активны стандартные источники света.</p>\n' +
            '<p></p>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/006_Рендер.png" alt="" width="325" height="174" class="alignnone size-full wp-image-617" srcset="https://bimteam.org/wp-content/uploads/2021/03/006_Рендер.png 325w, https://bimteam.org/wp-content/uploads/2021/03/006_Рендер-300x161.png 300w" sizes="(max-width: 325px) 100vw, 325px">\n' +
            '<p></p>\n' +
            '<p>Так будет выглядеть визуализация проекта без преобразования источников света:</p>\n' +
            '<p></p>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/Проект_без_света1.png" alt="" width="579" height="578" class="alignnone size-full wp-image-618" srcset="https://bimteam.org/wp-content/uploads/2021/03/Проект_без_света1.png 579w, https://bimteam.org/wp-content/uploads/2021/03/Проект_без_света1-150x150.png 150w, https://bimteam.org/wp-content/uploads/2021/03/Проект_без_света1-300x300.png 300w" sizes="(max-width: 579px) 100vw, 579px">\n' +
            '<p></p>\n' +
            '<p>Если галочка стоит:<br> \n' +
            'В окне “Autodesk Rendering” во вкладке “Освещение” можем увидеть наш источник света и включить или выключить его.<br> \n' +
            '<br> \n' +
            'Для более детального отображения различных источников можем воспользоваться кнопкой “Освещение” на вкладке “Точка обзора”:<br> \n' +
            '<br> \n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/006_НастройкиОсвещения-1024x231.png" alt="" width="1024" height="231" class="alignnone size-large wp-image-620" srcset="https://bimteam.org/wp-content/uploads/2021/03/006_НастройкиОсвещения-1024x231.png 1024w, https://bimteam.org/wp-content/uploads/2021/03/006_НастройкиОсвещения-300x68.png 300w, https://bimteam.org/wp-content/uploads/2021/03/006_НастройкиОсвещения-768x173.png 768w, https://bimteam.org/wp-content/uploads/2021/03/006_НастройкиОсвещения.png 1222w" sizes="(max-width: 1024px) 100vw, 1024px"><br> \n' +
            '<br> \n' +
            'На визуализации ниже выбран один источник света из Revit и стиль визуализации “Полное освещение”:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/Проект_со_света1.png" alt="" width="579" height="578" class="alignnone size-full wp-image-683" srcset="https://bimteam.org/wp-content/uploads/2021/03/Проект_со_света1.png 579w, https://bimteam.org/wp-content/uploads/2021/03/Проект_со_света1-150x150.png 150w, https://bimteam.org/wp-content/uploads/2021/03/Проект_со_света1-300x300.png 300w" sizes="(max-width: 579px) 100vw, 579px"></p>\n' +
            '<p></p>\n' +
            '<p><strong>7. Преобразовать помещение как атрибут</strong></p>\n' +
            '<p>Разместим в модели несколько помещений, ограничив их стенами и разделителями помещений:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/07_План.png" alt="" width="744" height="374" class="alignnone size-full wp-image-701" srcset="https://bimteam.org/wp-content/uploads/2021/03/07_План.png 744w, https://bimteam.org/wp-content/uploads/2021/03/07_План-300x151.png 300w" sizes="(max-width: 744px) 100vw, 744px"><br>\n' +
            '<br>\n' +
            'Если галочка “Преобразовать помещение как атрибут” стоит, то у элементов, формирующих помещения (стены, разделители помещений) появляется дополнительная вкладка с именем и номером помещения:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут-1024x645.png" alt="" width="1024" height="645" class="alignnone size-large wp-image-702" srcset="https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут-1024x645.png 1024w, https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут-300x189.png 300w, https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут-768x484.png 768w, https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут.png 1127w" sizes="(max-width: 1024px) 100vw, 1024px"><br>\n' +
            '<br>\n' +
            'У элементов, которые являются границами у двух и более помещений, появляется несколько вкладок:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут2Пом-1024x678.png" alt="" width="1024" height="678" class="alignnone size-large wp-image-703" srcset="https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут2Пом-1024x678.png 1024w, https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут2Пом-300x199.png 300w, https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут2Пом-768x509.png 768w, https://bimteam.org/wp-content/uploads/2021/03/07_Атрибут2Пом.png 1107w" sizes="(max-width: 1024px) 100vw, 1024px"><br>\n' +
            '<br>\n' +
            'Бо́льшую часть параметров из этой вкладки по умолчанию в Revit не видно и они относятся к разделу Анализ.<br>\n' +
            '<br>\n' +
            '</p><p><strong>8. Преобразовать свойства объекта</strong><br>\n' +
            ' Если галочка не стоит, у элемента имеется набор свойств, доступных ему из Revit:<br> \n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/008_БезСвойств.png" alt="" width="870" height="59" class="alignnone size-full wp-image-627" srcset="https://bimteam.org/wp-content/uploads/2021/03/008_БезСвойств.png 870w, https://bimteam.org/wp-content/uploads/2021/03/008_БезСвойств-300x20.png 300w, https://bimteam.org/wp-content/uploads/2021/03/008_БезСвойств-768x52.png 768w" sizes="(max-width: 870px) 100vw, 870px"><br>\n' +
            '<br>\n' +
            'При установке галочки на этой позиции, помимо этого, каждому элементу присваивается ряд внутренних свойств Navisworks:<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/008_СоСвойствами.png" alt="" width="512" height="26" class="alignnone size-full wp-image-628" srcset="https://bimteam.org/wp-content/uploads/2021/03/008_СоСвойствами.png 512w, https://bimteam.org/wp-content/uploads/2021/03/008_СоСвойствами-300x15.png 300w" sizes="(max-width: 512px) 100vw, 512px"><br>\n' +
            '<br>\n' +
            '<strong>9. Преобразовать связанные CAD файлы</strong> — в модель NWС также попадет та импортированная CAD геометрия, которая была загружена в Revit.<br>\n' +
            'Так выглядит фрагмент проекта в Revit с внедренной CAD подложкой:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/009_Revit_CAD-1024x784.jpg" alt="" width="1024" height="784" class="alignnone size-large wp-image-629" srcset="https://bimteam.org/wp-content/uploads/2021/03/009_Revit_CAD-1024x784.jpg 1024w, https://bimteam.org/wp-content/uploads/2021/03/009_Revit_CAD-300x230.jpg 300w, https://bimteam.org/wp-content/uploads/2021/03/009_Revit_CAD-768x588.jpg 768w" sizes="(max-width: 1024px) 100vw, 1024px"><br>\n' +
            '<br>\n' +
            'Экспортируем данный фрагмент в Navisworks. Если галочка “Преобразовать связанные CAD файлы” не стоит, видим такую картину:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/009_БезКада.png" alt="" width="837" height="739" class="alignnone size-full wp-image-631" srcset="https://bimteam.org/wp-content/uploads/2021/03/009_БезКада.png 837w, https://bimteam.org/wp-content/uploads/2021/03/009_БезКада-300x265.png 300w, https://bimteam.org/wp-content/uploads/2021/03/009_БезКада-768x678.png 768w" sizes="(max-width: 837px) 100vw, 837px"><br>\n' +
            '<br>\n' +
            'Полученный результат, если поставить галочку:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/009_СКадом.png" alt="" width="1002" height="760" class="alignnone size-full wp-image-632" srcset="https://bimteam.org/wp-content/uploads/2021/03/009_СКадом.png 1002w, https://bimteam.org/wp-content/uploads/2021/03/009_СКадом-300x228.png 300w, https://bimteam.org/wp-content/uploads/2021/03/009_СКадом-768x583.png 768w" sizes="(max-width: 1002px) 100vw, 1002px">\n' +
            '<br>\n' +
            'Сразу видно, что в Navis подложка выглядит иначе, чем в Revit или AutoCad — не все элементы экспортировались корректно. Для корректного отображения DWG/DWF — подложек, стоит загрузить их отдельно в Navisworks с помощью функции Добавить.<img src="https://bimteam.org/wp-content/uploads/2021/03/009_Добавить-1-e1615894336276.png" alt="" width="70" height="80" class="alignnone size-full wp-image-639"><br>\n' +
            '<br>\n' +
            '<strong>10. Преобразовать связанные файлы</strong> — в модель NWС попадут все связанные файлы, которые есть в модели Revit.<br>\n' +
            'Предположим, в модели Revit с инженерными системами подгружено 2 связи — архитектура и конструктив:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/OSN-982-MDL-PXX-VK-001_отсоединено-1024x908.jpg" alt="" width="1024" height="908" class="alignnone size-large wp-image-641" srcset="https://bimteam.org/wp-content/uploads/2021/03/OSN-982-MDL-PXX-VK-001_отсоединено-1024x908.jpg 1024w, https://bimteam.org/wp-content/uploads/2021/03/OSN-982-MDL-PXX-VK-001_отсоединено-300x266.jpg 300w, https://bimteam.org/wp-content/uploads/2021/03/OSN-982-MDL-PXX-VK-001_отсоединено-768x681.jpg 768w" sizes="(max-width: 1024px) 100vw, 1024px">\n' +
            '<br>\n' +
            'Без галочки при экспорте в Navis связи не будут экспортированы, получим следующий результат:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/010_БезСвязей.png" alt="" width="908" height="559" class="alignnone size-full wp-image-642" srcset="https://bimteam.org/wp-content/uploads/2021/03/010_БезСвязей.png 908w, https://bimteam.org/wp-content/uploads/2021/03/010_БезСвязей-300x185.png 300w, https://bimteam.org/wp-content/uploads/2021/03/010_БезСвязей-768x473.png 768w" sizes="(max-width: 908px) 100vw, 908px">\n' +
            '<br>\n' +
            'С галочкой все связи, которые есть в модели, экспортируются вместе с основной геометрией:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/010_СоСвязями.png" alt="" width="892" height="666" class="alignnone size-full wp-image-643" srcset="https://bimteam.org/wp-content/uploads/2021/03/010_СоСвязями.png 892w, https://bimteam.org/wp-content/uploads/2021/03/010_СоСвязями-300x224.png 300w, https://bimteam.org/wp-content/uploads/2021/03/010_СоСвязями-768x573.png 768w" sizes="(max-width: 892px) 100vw, 892px"><br>\n' +
            '<br>\n' +
            '<strong>11. Преобразовывать элементы конструкции</strong><br>\n' +
            'Из русского перевода не сразу понятно, о чем идёт речь. Если мы обратимся к англоязычному интерфейсу Navisworks, то данная настройка будет выглядеть следующим образом:<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/Перевод.png" alt="" width="192" height="22" class="alignnone size-full wp-image-709"><br>\n' +
            'Если к элементу применен инструмент Части <img src="https://bimteam.org/wp-content/uploads/2021/04/Части.png" alt="" width="43" height="42" class="alignnone size-full wp-image-710"> ,то каждая составная часть называется Деталью:<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/Деталь.png" alt="" width="467" height="290" class="alignnone size-full wp-image-711" srcset="https://bimteam.org/wp-content/uploads/2021/04/Деталь.png 467w, https://bimteam.org/wp-content/uploads/2021/04/Деталь-300x186.png 300w" sizes="(max-width: 467px) 100vw, 467px"><br>\n' +
            '<br>\n' +
            'Галочка <strong>Преобразовывать элементы конструкции</strong> позволяет нам экспортировать детали по отдельности или в исходном виде, без разделения на части в Navisworks.<br>\n' +
            '<br>\n' +
            'Без галочки &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; С галочкой<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/Без_КР_350.gif" alt="" width="300" height="230" class="alignnone size-full wp-image-721">&emsp;&emsp;&emsp;<img src="https://bimteam.org/wp-content/uploads/2021/04/С_КР_350.gif" alt="" width="300" height="229" class="alignnone size-full wp-image-720">\n' +
            '\n' +
            '<br>\n' +
            '<strong>12. Проверять и находить отсутствующие материалы</strong><br>\n' +
            'При экспорте из Revit с материалами я так и не смогла найти разницы между вариантом с галочкой и без. Если вы знаете, о чем идёт речь, пишите в комментарии!<br>\n' +
            '<br>\n' +
            'Если файл Revit пришёл с другого компьютера, а библиотеки текстур потерялись, в обоих вариантах будет появляться окно с предупреждением: <br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/Oshib-1.png" alt="" width="453" height="175" class="alignnone size-full wp-image-738" srcset="https://bimteam.org/wp-content/uploads/2021/04/Oshib-1.png 453w, https://bimteam.org/wp-content/uploads/2021/04/Oshib-1-300x116.png 300w" sizes="(max-width: 453px) 100vw, 453px"><br>\n' +
            '<br>\n' +
            'Через кнопку Обзор можно указать местонахождение текстуры.<br>\n' +
            '<br>\n' +
            'Также, в Navisworks можно подгрузить библиотеку в формате .adsklib. В обоих случаях экспорта материалы с неё подхватываются.<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/04/рендер.png" alt="" width="533" height="655" class="alignnone size-full wp-image-739" srcset="https://bimteam.org/wp-content/uploads/2021/04/рендер.png 533w, https://bimteam.org/wp-content/uploads/2021/04/рендер-244x300.png 244w" sizes="(max-width: 533px) 100vw, 533px"><br>\n' +
            '<br>\n' +
            '<strong>13. Разделить файл на уровни</strong> – в первую очередь влияет на отображение дерева выбора.<br> \n' +
            'Если галочка стоит:<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/13_СРазделением.png" alt="" width="416" height="201" class="alignnone size-full wp-image-646" srcset="https://bimteam.org/wp-content/uploads/2021/03/13_СРазделением.png 416w, https://bimteam.org/wp-content/uploads/2021/03/13_СРазделением-300x145.png 300w" sizes="(max-width: 416px) 100vw, 416px">\n' +
            '<br>\n' +
            '<br>\n' +
            'Если галочка не стоит:<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/13_БезРазделения.png" alt="" width="424" height="187" class="alignnone size-full wp-image-647" srcset="https://bimteam.org/wp-content/uploads/2021/03/13_БезРазделения.png 424w, https://bimteam.org/wp-content/uploads/2021/03/13_БезРазделения-300x132.png 300w" sizes="(max-width: 424px) 100vw, 424px"><br>\n' +
            '<br>\n' +
            '<strong>14. Экспорт.</strong> Здесь у нас есть несколько вариантов выбора:<br>\n' +
            '<strong>a. Целый проект</strong> – будет экспортирована вся геометрия, существующая в модели Revit.<br>\n' +
            '<br>\n' +
            'Revit &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Navisworks<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/01_Revit_Целый_проект_300х300.gif" alt="" width="300" height="300" class="alignnone size-full wp-image-657"><img src="https://bimteam.org/wp-content/uploads/2021/03/01_Navis_Целый_проект_300х300.gif" alt="" width="300" height="300" class="alignnone size-full wp-image-659"><br>\n' +
            '<br>\n' +
            '<strong>b. Текущий вид</strong> – будет экспортирована геометрия, настроенная на текущем виде Revit.<br>\n' +
            '<br>\n' +
            'Revit &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Navisworks<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/02_Revit_Текущий_вид_300х300.gif" alt="" width="300" height="300" class="alignnone size-full wp-image-666"><img src="https://bimteam.org/wp-content/uploads/2021/03/02_Navis_Текущий_вид_300x300.gif" alt="" width="300" height="300" class="alignnone size-full wp-image-667"><br>\n' +
            '<br>\n' +
            '<strong>c. Выбор </strong>– будет экспортирована геометрия, выбранная в данный момент. Если ничего не выбрано, экспортируется текущий вид.<br>\n' +
            '<br>\n' +
            'Revit &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Navisworks<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/03_Revit_Выбор_300x300.gif" alt="" width="300" height="300" class="alignnone size-full wp-image-669"><img src="https://bimteam.org/wp-content/uploads/2021/03/03_Navis_Выбор_300х300.gif" alt="" width="300" height="300" class="alignnone size-full wp-image-670"><br>\n' +
            '<br>\n' +
            '<strong>15. Экспортировать геометрию помещения </strong>– если эта команда активна, то появляется возможность увидеть помещения, существующие в модели, как трехмерные объекты.<br>\n' +
            'Если галочка стоит (видим прозрачные объемы помещений):<br>\n' +
            '<br>\n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/015_ЭкспортГеометрии.png" alt="" width="512" height="272" class="alignnone size-full wp-image-673" srcset="https://bimteam.org/wp-content/uploads/2021/03/015_ЭкспортГеометрии.png 512w, https://bimteam.org/wp-content/uploads/2021/03/015_ЭкспортГеометрии-300x159.png 300w" sizes="(max-width: 512px) 100vw, 512px"><br>\n' +
            '<br>\n' +
            'Галочка не стоит:<br>\n' +
            '<br> \n' +
            '<img src="https://bimteam.org/wp-content/uploads/2021/03/015_БезГеометрии-e1615899793960.png" alt="" width="512" height="351" class="alignnone size-full wp-image-674"><br>\n' +
            '<br> \n' +
            'Свойства трехмерного помещения будут повторять свойства, указанные у атрибута помещения (п. 7).<br> \n' +
            '<br> \n' +
            '<strong>16.</strong> Настроенные параметры можно в любой момент экспортировать и применять в других моделях.<br> \n' +
            '<strong>17.</strong> Позволяет загружать преднастроенные параметры.<br> \n' +
            '\n' +
            '</p>'
    },
    {
        id: '2',
        category: 'Revit',
        date: '29.04.2021',
        title: 'Удобное управление отображением арматурных стержней в Revit',
        text: '<p>А также явные признаки победы институционализации, вне зависимости от их уровня, должны быть объективно рассмотрены соответствующими инстанциями. Таким образом, реализация намеченных плановых заданий создаёт предпосылки для укрепления моральных ценностей.</p><p>Противоположная точка зрения подразумевает, что сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть призваны к ответу. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня в значительной степени обусловливает важность своевременного выполнения сверхзадачи.</p><p>Мы вынуждены отталкиваться от того, что консультация с широким активом обеспечивает актуальность приоретизации разума над эмоциями. Сложно сказать, почему представители современных социальных резервов являются только методом политического участия и ассоциативно распределены по отраслям. А ещё стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы. Картельные сговоры не допускают ситуации, при которой сделанные на базе интернет-аналитики выводы, превозмогая сложившуюся непростую экономическую ситуацию, преданы социально-демократической анафеме.</p>'
    },
    {
        id: '3',
        category: 'Revit',
        date: '29.04.2021',
        title: 'Быстрое формирование набора листов в Revit для печати и экспорта в DWG',
        text: '<p>Наше дело не так однозначно, как может показаться: начало повседневной работы по формированию позиции предоставляет широкие возможности для распределения внутренних резервов и ресурсов. В целом, конечно, синтетическое тестирование не даёт нам иного выбора, кроме определения своевременного выполнения сверхзадачи. Есть над чем задуматься: элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, в равной степени предоставлены сами себе. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности однозначно определяет каждого участника как способного принимать собственные решения касаемо стандартных подходов. В рамках спецификации современных стандартов, независимые государства объявлены нарушающими общечеловеческие нормы этики и морали.</p><p>Повседневная практика показывает, что выбранный нами инновационный путь не оставляет шанса для системы обучения кадров, соответствующей насущным потребностям. Предварительные выводы неутешительны: сложившаяся структура организации создаёт предпосылки для существующих финансовых и административных условий. Картельные сговоры не допускают ситуации, при которой явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p><p>Но стремящиеся вытеснить традиционное производство, нанотехнологии являются только методом политического участия и представлены в исключительно положительном свете! Но сторонники тоталитаризма в науке неоднозначны и будут в равной степени предоставлены сами себе. Принимая во внимание показатели успешности, укрепление и развитие внутренней структуры создаёт предпосылки для системы массового участия. Однозначно, тщательные исследования конкурентов функционально разнесены на независимые элементы.</p><p>Идейные соображения высшего порядка, а также семантический разбор внешних противодействий в значительной степени обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности. И нет сомнений, что сторонники тоталитаризма в науке, инициированные исключительно синтетически, своевременно верифицированы. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса направлений прогрессивного развития.</p><p>Картельные сговоры не допускают ситуации, при которой интерактивные прототипы могут быть функционально разнесены на независимые элементы. Внезапно, базовые сценарии поведения пользователей освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, подвергнуты целой серии независимых исследований. Прежде всего, постоянный количественный рост и сфера нашей активности предполагает независимые способы реализации приоретизации разума над эмоциями.</p>'
    }
]